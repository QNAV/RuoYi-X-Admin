import { MapEnableDisableStatus, MapMenuType, MapYesNoStatus, MenuType } from '@/constants';
import { selectedKeysAtom, useRefreshMenuList } from '@/pages/system/menu/model';
import type { CreateMenuData } from '@/services';
import { reqGetMenuDetail, reqUpdateMenu } from '@/services';
import type { ProDescriptionsProps } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { useRequest } from 'ahooks';
import { Divider, Empty, message } from 'antd';
import type { FC } from 'react';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';

const column: ProDescriptionsProps['column'] = { xs: 1, sm: 1, md: 1, lg: 1, xl: 3 };

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
          valueEnum: MapEnableDisableStatus,
        },
        {
          title: '是否显示',
          dataIndex: 'visible',
          key: 'visible',
          valueType: 'radio',
          valueEnum: MapYesNoStatus,
          tooltip: '选择否则路由将不会出现在侧边栏，但仍然可以访问',
        },
        {
          title: '是否外链',
          dataIndex: 'isFrame',
          key: 'isFrame',
          valueType: 'radio',
          valueEnum: MapYesNoStatus,
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
          dataIndex: 'params',
          key: 'params',
          valueType: 'code',
          tooltip: '访问路由的默认传递参数，如：{"id": 1, "name": "ry"}',
        },
      );
    }

    if (menuType === MenuType.C) {
      columns.push({
        title: '组件路径',
        dataIndex: 'component',
        key: 'component',
        valueType: 'text',
        tooltip: '访问的组件路径，如：`system/user/index`，默认在`/src/pages`目录下',
      });
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

const MenuDetails: FC = () => {
  const refreshMenuList = useRefreshMenuList();

  const selectedKeys = useRecoilValue(selectedKeysAtom);
  const menuId = selectedKeys?.[0] ? Number(selectedKeys?.[0]) : 0;

  const { data, refresh } = useRequest(
    async () => {
      const { params, ...rest } = await reqGetMenuDetail(menuId);

      return { ...rest, params: JSON.stringify(params) };
    },
    {
      ready: menuId > 0,
      refreshDeps: [menuId],
    },
  );

  const columns = useColumns(data?.menuType);

  const editable: ProDescriptionsProps['editable'] = {
    onSave: async (key, record) => {
      const newKey = key as keyof CreateMenuData;

      const { menuType, orderNum, menuName } = record;

      let value = record[newKey];

      if (newKey === 'params') {
        value = JSON.parse(value);
      }

      await reqUpdateMenu({ menuId, menuType, orderNum, menuName, [newKey]: value });

      message.success('修改成功');

      refresh();

      await refreshMenuList();
    },
  };

  if (menuId > 0)
    return (
      <div>
        <ProDescriptions
          columns={[
            {
              title: '类型',
              dataIndex: 'menuType',
              key: 'menuType',
              valueType: 'select',
              valueEnum: MapMenuType,
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
      </div>
    );

  return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="点击选择左侧菜单项查看详情" />;
};

export default MenuDetails;
