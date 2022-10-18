import {
  CEnableDisableStatus,
  CIcon,
  CIsFrame,
  CMenuName,
  COrderNum,
  CPath,
  CPathParams,
  CPerms,
  CRemark,
  CVisible,
} from '@/columns';
import { EmptySimple } from '@/components';
import { MenuType, MenuTypeMap } from '@/constants';
import { useAtomValueAccess } from '@/models';
import { useReFetchMenuList, useReFetchMenuOptions, useValueSelectedMenuData } from '@/pages/system/menu/model';
import { SysMenuGetInfo, SysMenuPostEdit } from '@/services/sys/SysMenuService';
import type { ProDescriptionsProps } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { useRequest } from 'ahooks';
import { Divider, message, Spin } from 'antd';
import type { FC } from 'react';
import { useMemo } from 'react';

const column: ProDescriptionsProps['column'] = { xs: 1, sm: 1, md: 1, lg: 1, xl: 2 };

const useColumns = (menuType?: MenuType): ProDescriptionsProps['columns'] => {
  return useMemo(() => {
    const columns: ProDescriptionsProps['columns'] = [];

    if (!menuType) return [];

    if (menuType !== MenuType.F) {
      columns.push(CEnableDisableStatus, CVisible, CIsFrame, CIcon, CPath);
    }

    if (menuType === MenuType.C) {
      columns.push(CPathParams);
    }

    if (menuType !== MenuType.M) {
      columns.push(CPerms);
    }

    return columns;
  }, [menuType]);
};

const DescDetails: FC = () => {
  const access = useAtomValueAccess();
  const reFetchMenuList = useReFetchMenuList();
  const reFetchMenuOptions = useReFetchMenuOptions();

  const { hasSelected, selectedMenuId } = useValueSelectedMenuData();
  const { data, loading, refresh } = useRequest(
    async () => {
      return await SysMenuGetInfo({ menuId: selectedMenuId });
    },
    {
      ready: hasSelected,
      refreshDeps: [selectedMenuId],
    },
  );

  const { mutateAsync } = useMutation(SysMenuPostEdit, {
    onSuccess: () => {
      refresh();
      reFetchMenuList();
      reFetchMenuOptions();
      message.success('保存成功');
    },
  });

  const columns = useColumns(data?.menuType as MenuType | undefined);

  const editable: ProDescriptionsProps['editable'] = access.canEditSysMenu
    ? {
        onSave: async (key, record) => {
          const { menuType, orderNum, menuName, menuId } = record;

          await mutateAsync({
            menuId,
            menuType,
            orderNum,
            menuName,
            [key as keyof API.SysMenuVo]: record[key as keyof API.SysMenuVo],
          });
        },
      }
    : undefined;

  if (selectedMenuId === 0) return <EmptySimple description="点击选择左侧菜单项查看详情" />;

  return (
    <Spin spinning={loading}>
      <ProDescriptions
        columns={[
          {
            title: '类型',
            dataIndex: 'menuType',
            key: 'menuType',
            valueType: 'select',
            valueEnum: MenuTypeMap,
            editable: false,
          },
          {
            title: '创建时间',
            dataIndex: 'createTime',
            key: 'createTime',
            valueType: 'dateTime',
            editable: false,
            hideInSearch: true,
          },
        ]}
        dataSource={data}
        column={column}
      />

      <Divider />

      <ProDescriptions
        columns={[CMenuName, COrderNum, CRemark]}
        dataSource={data}
        editable={editable}
        column={column}
      />

      <Divider />

      <ProDescriptions columns={columns} dataSource={data} editable={editable} column={column} />
    </Spin>
  );
};

export default DescDetails;
