import { useInitActionType } from '@/hooks';
import { SysMenuGetRoleMenuTreeSelect } from '@/services/sys/SysMenuService';
import { SysRoleGetInfo, SysRolePostEdit } from '@/services/sys/SysRoleService';
import type { TreeData } from '@/utils';
import { filterCheckedTree, getMenuIds } from '@/utils';
import type { ActionType } from '@ant-design/pro-components';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { message } from 'antd';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';
import { useEffect } from 'react';

// 角色列表操作
const atomRoleListActions = atom<ActionType | undefined>(undefined);
export const useAtomValueRoleListActions = () => useAtomValue(atomRoleListActions);
export const useActionRefRoleList = () => useInitActionType(atomRoleListActions);

// 角色详情
const atomRoleDetails = atomWithReset({
  open: false,
  roleId: 0,
  roleName: '',
});
export const useHideRoleDetails = () => useResetAtom(atomRoleDetails);
export const useShowRoleDetails = () => {
  const setAtom = useSetAtom(atomRoleDetails);
  return (roleId: number, roleName: string) => {
    setAtom({ open: true, roleId, roleName });
  };
};
export const useAtomValueRoleDetails = () => useAtomValue(atomRoleDetails);

// 导出传参
const atomSearchParams = atom<API.SysRoleQueryBo>({});
export const useAtomValueSearchParams = () => useAtomValue(atomSearchParams);
export const useSetSearchParams = () => useSetAtom(atomSearchParams);

const namespace = 'sysRole';
const queryKey = [namespace, 'details'];
export const useQueryRoleDetails = (onSuccess: (details: API.SysRoleVo) => void) => {
  const { roleId } = useAtomValueRoleDetails();

  const query = useQuery(queryKey, () => SysRoleGetInfo({ roleId }), {
    onSuccess,
    enabled: false,
  });

  useEffect(() => {
    if (roleId > 0) {
      query.refetch();
    }
  }, [roleId]);

  return query;
};

const queryTreeKey = [namespace, 'tree'];
export const useQueryRoleTree = (onSuccess: (selectedTreeData: TreeData[]) => void) => {
  const { roleId } = useAtomValueRoleDetails();

  const query = useQuery(
    queryTreeKey,
    async () => {
      const { menus, checkedKeys } = (await SysMenuGetRoleMenuTreeSelect({ roleId })) as {
        menus: TreeData[];
        checkedKeys: number[];
      };

      return {
        treeData: menus,
        selectedMenuIds: checkedKeys,
        selectedTreeData: filterCheckedTree(menus, checkedKeys),
        allMenuIds: getMenuIds(menus),
      };
    },
    {
      onSuccess: (data) => {
        onSuccess(data.selectedTreeData);
      },
      enabled: false,
    },
  );

  useEffect(() => {
    if (roleId > 0) {
      query.refetch();
    }
  }, [roleId]);

  return query;
};

export const useEditRoleDetails = (onSuccess: () => void) => {
  const queryClient = useQueryClient();

  return useMutation(
    async (params: Partial<API.SysRole>) => {
      const detailsData = queryClient.getQueryData<API.SysRoleVo>(queryKey);
      const treeData = queryClient.getQueryData<{ selectedMenuIds: number[] }>(queryTreeKey);

      await SysRolePostEdit({
        roleId: detailsData!.roleId,
        roleKey: detailsData!.roleKey,
        roleName: detailsData!.roleName,
        roleSort: detailsData!.roleSort,
        status: detailsData!.status,
        menuIds: treeData!.selectedMenuIds,
        menuCheckStrictly: false,
        deptCheckStrictly: false,
        ...params,
      });
    },
    {
      onSuccess: () => {
        onSuccess();
        message.success('保存成功');
      },
    },
  );
};
