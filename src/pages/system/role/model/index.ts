import { useInitActionType } from '@/hooks';
import type { SysRole, SysRoleVo } from '@/services/system/data-contracts';
import { sysMenuGetRoleMenuTreeSelect, sysRoleGetInfo, sysRolePostEdit } from '@/services/system/System';
import type { TreeData } from '@/utils';
import { filterCheckedTree, getExpandedKeys, getMenuIds } from '@/utils';
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
});
export const useHideRoleDetails = () => useResetAtom(atomRoleDetails);
export const useShowRoleDetails = () => {
  const setAtom = useSetAtom(atomRoleDetails);
  return (roleId: number) => {
    setAtom({ open: true, roleId });
  };
};
export const useAtomValueRoleDetails = () => useAtomValue(atomRoleDetails);

const namespace = 'sysRole';
const queryKey = [namespace, 'details'];
export const useQueryRoleDetails = (onSuccess: (details: SysRoleVo) => void) => {
  const { roleId } = useAtomValueRoleDetails();

  const query = useQuery(queryKey, () => sysRoleGetInfo({ roleId }), {
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
      const { menus, checkedKeys } = (await sysMenuGetRoleMenuTreeSelect({ roleId })) as unknown as {
        menus: TreeData[];
        checkedKeys: number[];
      };

      return {
        treeData: menus,
        selectedMenuIds: checkedKeys,
        selectedTreeData: filterCheckedTree(menus, checkedKeys),
        allMenuIds: getMenuIds(menus),
        allExpandedKeys: getExpandedKeys(menus),
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
    async (params: Partial<SysRole>) => {
      const roleDetailsData = queryClient.getQueryData<SysRoleVo>(queryKey);
      const deptTreeData = queryClient.getQueryData<{ selectedMenuIds: number[] }>(queryTreeKey);

      await sysRolePostEdit({
        roleId: roleDetailsData!.roleId,
        roleKey: roleDetailsData!.roleKey,
        roleName: roleDetailsData!.roleName,
        roleSort: roleDetailsData!.roleSort,
        status: roleDetailsData!.status,
        menuIds: deptTreeData!.selectedMenuIds,
        menuCheckStrictly: 'NO',
        deptCheckStrictly: 'NO',
        ...params,
      });
    },
    {
      onSuccess: async () => {
        onSuccess();
        message.success('保存成功');
      },
    },
  );
};
