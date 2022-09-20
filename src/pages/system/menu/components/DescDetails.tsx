import { EmptySimple } from '@/components';
import { EnableDisableStatusMap, MenuType, MenuTypeMap, YesNoStatusMap } from '@/constants';
import { useAccess } from '@/models';
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
      columns.push(
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
          valueType: 'radio',
          valueEnum: EnableDisableStatusMap,
        },
        {
          title: '是否显示',
          dataIndex: 'visible',
          key: 'visible',
          valueType: 'radio',
          valueEnum: YesNoStatusMap,
          tooltip: '选择否则路由将不会出现在侧边栏，但仍然可以访问',
        },
        {
          title: '是否外链',
          dataIndex: 'isFrame',
          key: 'isFrame',
          valueType: 'radio',
          valueEnum: YesNoStatusMap,
          tooltip: '选择是外链则路由地址需要以`http(s)://`开头',
        },
        {
          title: '图标',
          dataIndex: 'icon',
          key: 'icon',
          valueType: 'text',
          tooltip: 'https://ant.design/components/icon-cn/',
        },
        {
          title: '路由地址',
          dataIndex: 'path',
          key: 'path',
          valueType: 'text',
          tooltip: '访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头',
        },
        {
          title: '路由参数',
          dataIndex: 'queryParam',
          key: 'queryParam',
          valueType: 'code',
          tooltip: '访问路由的默认传递参数，如：{"id": 1, "name": "ry"}',
        },
      );
    }

    if (menuType !== MenuType.M) {
      columns.push({
        title: '权限标识',
        dataIndex: 'perms',
        key: 'perms',
        valueType: 'text',
        copyable: true,
      });
    }

    return columns;
  }, [menuType]);
};

const DescDetails: FC = () => {
  const access = useAccess();
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
            [key as keyof API.SysMenu]: record[key as keyof API.SysMenu],
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
          },
        ]}
        dataSource={data}
        column={column}
      />

      <Divider />

      <ProDescriptions
        columns={[
          {
            title: '名称',
            dataIndex: 'menuName',
            key: 'menuName',
            valueType: 'text',
          },
          {
            title: '显示顺序',
            dataIndex: 'orderNum',
            key: 'orderNum',
            valueType: 'digit',
            tooltip: '默认数值为0，数值越大排序越靠后，数值相等按照创建时间先后排序',
          },
          {
            title: '备注',
            dataIndex: 'remark',
            key: 'remark',
            valueType: 'textarea',
            hideInSearch: true,
          },
        ]}
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
