import { EmptySimple, IconPark } from '@/components';
import { useCheckAccess } from '@/hooks';
import { useQueryDictSysMenuType, useQueryDictSysNormalDisable, useQueryDictSysYesNo } from '@/models';
import {
  useAtomValueSelectedMenuData,
  useReFetchMenuList,
  useReFetchMenuOptions,
  useShowDrawerSelectIcon,
} from '@/pages/system/menu/model';
import type { SysMenuVo } from '@/services/system/data-contracts';
import { sysMenuGetInfo, sysMenuPostEdit } from '@/services/system/System';
import { EditOutlined } from '@ant-design/icons';
import type { ProDescriptionsProps } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { useRequest } from 'ahooks';
import { App, Divider, Form, Space, Spin } from 'antd';
import type { FC } from 'react';
import { useMemo, useState } from 'react';

const column: ProDescriptionsProps['column'] = { xs: 1, sm: 1, md: 1, lg: 1, xl: 2 };

const useColumns = (
  menuType?: SysMenuVo['menuType'],
  onSelected?: (icon: string) => void,
): ProDescriptionsProps['columns'] => {
  const { valueEnumSysNormalDisable } = useQueryDictSysNormalDisable();
  const { valueEnumSysYesNo } = useQueryDictSysYesNo();
  const showDrawerSelectIcon = useShowDrawerSelectIcon();

  return useMemo(() => {
    const columns: ProDescriptionsProps['columns'] = [];

    if (!menuType) return [];

    if (menuType !== 'BUTTON') {
      columns.push(
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
          valueType: 'radio',
          valueEnum: valueEnumSysNormalDisable,
        },
        {
          title: '是否显示',
          dataIndex: 'visible',
          key: 'visible',
          valueType: 'radio',
          valueEnum: valueEnumSysYesNo,
          tooltip: '选择否则路由将不会出现在侧边栏，但仍然可以访问',
        },
        {
          title: '是否外链',
          dataIndex: 'isFrame',
          key: 'isFrame',
          valueType: 'radio',
          valueEnum: valueEnumSysYesNo,
          tooltip: '选择是外链则路由地址需要以`http(s)://`开头',
        },
        {
          title: '图标',
          dataIndex: 'icon',
          key: 'icon',
          valueType: 'text',
          editable: false,
          tooltip: 'https://iconpark.oceanengine.com',
          render: (_dom, entity) => {
            return (
              <Space>
                <IconPark type={entity.icon} size={24} />
                <EditOutlined className="cursor-pointer" onClick={() => showDrawerSelectIcon(onSelected)} />
              </Space>
            );
          },
        },
        {
          title: '路由地址',
          dataIndex: 'path',
          key: 'path',
          valueType: 'text',
          tooltip: '访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头',
        },
      );
    }

    if (menuType === 'MENU') {
      columns.push({
        title: '路由参数',
        dataIndex: 'queryParam',
        key: 'queryParam',
        valueType: 'code',
        tooltip: '访问路由的默认传递参数，如：{"id": 1, "name": "ry"}',
      });
    }

    if (menuType !== 'DIRECTORY') {
      columns.push({ title: '权限标识', dataIndex: 'perms', key: 'perms', valueType: 'text', copyable: true });
    }

    return columns;
  }, [menuType]);
};

const DescMenu: FC = () => {
  const reFetchMenuList = useReFetchMenuList();
  const reFetchMenuOptions = useReFetchMenuOptions();

  const { valueEnumSysMenuType } = useQueryDictSysMenuType();

  const { hasSelected, selectedMenuId } = useAtomValueSelectedMenuData();
  const { data, loading, refresh } = useRequest(
    async () => {
      return await sysMenuGetInfo({ menuId: selectedMenuId });
    },
    {
      ready: hasSelected,
      refreshDeps: [selectedMenuId],
    },
  );

  const { message } = App.useApp();

  const { mutateAsync } = useMutation(sysMenuPostEdit, {
    onSuccess: async () => {
      await Promise.all([refresh(), reFetchMenuList(), reFetchMenuOptions()]);
      message.success('保存成功');
    },
  });

  const columns = useColumns(data?.menuType, async (icon: string) => {
    if (!data) return;

    const { menuType, orderNum, menuName, menuId } = data;

    await mutateAsync({
      menuId,
      menuType,
      orderNum,
      menuName,
      icon,
    });
  });

  const checkAccess = useCheckAccess();

  const [form] = Form.useForm();
  const [editableKeys, setEditableKeys] = useState<string[]>([]);
  const editable: ProDescriptionsProps['editable'] = checkAccess('system:menu:edit')
    ? {
        form,
        editableKeys,
        onChange: (keys, editableRows) => {
          setEditableKeys(keys as string[]);
          if (keys.length > 0) {
            const [key] = keys;
            form.setFieldsValue({
              [key]: editableRows[key as keyof typeof editableRows],
            });
          }
        },
        onSave: async (key, record) => {
          const { menuType, orderNum, menuName, menuId } = record;

          await mutateAsync({
            menuId,
            menuType,
            orderNum,
            menuName,
            [key as keyof SysMenuVo]: record[key as keyof SysMenuVo],
          });
        },
      }
    : undefined;

  if (!hasSelected) return <EmptySimple description="点击选择左侧菜单项查看详情" />;

  return (
    <Spin spinning={loading}>
      <ProDescriptions
        columns={[
          {
            title: '类型',
            dataIndex: 'menuType',
            key: 'menuType',
            valueType: 'select',
            valueEnum: valueEnumSysMenuType,
          },
          {
            title: '创建时间',
            dataIndex: 'createTime',
            key: 'createTime',
            valueType: 'dateTime',
          },
        ]}
        dataSource={data}
        column={column}
      />

      <Divider />

      <ProDescriptions
        columns={[
          { title: '名称', dataIndex: 'menuName', key: 'menuName', valueType: 'text' },
          { title: '排序', dataIndex: 'orderNum', key: 'orderNum', valueType: 'digit' },
          { title: '备注', dataIndex: 'remark', key: 'remark', valueType: 'textarea' },
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

export default DescMenu;
