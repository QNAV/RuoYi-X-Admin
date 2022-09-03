import { AntdIcon, EmptySimple } from '@/components';
import { EnableDisableStatusMap, MenuType } from '@/constants';
import {
  useDeleteMenu,
  useQueryMenuList,
  useResetSelectedMenuId,
  useSelectedMenuIdState,
  useShowCreateModal,
} from '@/pages/system/menu/model';
import { CaretDownOutlined, CaretRightOutlined, CopyOutlined } from '@ant-design/icons';
import { LightFilter, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import type { TreeProps } from 'antd';
import { Button, Dropdown, Menu, message, Space, Tag, Tree } from 'antd';
import copy from 'copy-to-clipboard';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const menuTypeColor: Record<MenuType | string, string> = {
  M: 'blue',
  C: 'green',
  F: 'red',
};

const titleRender: TreeProps<API.SysMenu>['titleRender'] = (item) => {
  return (
    <>
      <Tag color="rgb(148 163 184)">{item.orderNum}</Tag>

      {item?.icon && <AntdIcon name={item.icon} className="mr-1" />}

      <Tag color={menuTypeColor[item.menuType]} style={{ margin: '0 0 2px 0' }}>
        {item.menuName}
      </Tag>

      {item?.perms && (
        <Tag style={{ margin: '0 0 2px 2px' }}>
          <Space size="small">
            {item.perms}
            <CopyOutlined
              style={{ color: '#1890ff' }}
              onClick={(e) => {
                copy(item.perms!);
                message.success('复制成功');
                e.stopPropagation();
              }}
            />
          </Space>
        </Tag>
      )}
    </>
  );
};

const TreeTitle: FC = () => (
  <div className="mb-2">
    标签含义：
    <Tag color="rgb(148 163 184)">显示顺序</Tag>
    <Tag color={menuTypeColor[MenuType.M]}>目录</Tag>
    <Tag color={menuTypeColor[MenuType.C]}>菜单</Tag>
    <Tag color={menuTypeColor[MenuType.F]}>按钮</Tag>
    <Tag>权限标识</Tag>
  </div>
);

const TreeMenu = () => {
  const [searchParams, setSearchParams] = useState<API.SysMenuQueryBo>({});

  const [selectedKeys, setSelectedKeys] = useState<number[]>([]);
  const [expandedKeys, setExpandedKeys] = useState<TreeProps['expandedKeys']>([]);

  const [selectedMenuId, setSelectedMenuId] = useSelectedMenuIdState();
  const resetSelectedMenuId = useResetSelectedMenuId();

  const showCreateModal = useShowCreateModal();

  const { data: menuData, refetch } = useQueryMenuList(searchParams);

  const { mutate: deleteMenu } = useDeleteMenu();

  const onSelect: TreeProps<API.SysMenu>['onSelect'] = (selectedKeys) => {
    setSelectedKeys(selectedKeys as number[]);
  };

  const isAllExpanded = expandedKeys?.length !== 0 && expandedKeys?.length === menuData?.parentIds?.length;

  useEffect(() => {
    refetch();
  }, [searchParams]);

  useEffect(() => {
    if (selectedKeys?.[0]) {
      setSelectedMenuId(selectedKeys[0]);
    } else {
      resetSelectedMenuId();
    }
  }, [selectedKeys]);

  return (
    <>
      <TreeTitle />

      <div className="flex justify-between items-center">
        <Button
          size="small"
          className="my-2"
          icon={isAllExpanded ? <CaretDownOutlined /> : <CaretRightOutlined />}
          onClick={() => setExpandedKeys(isAllExpanded ? [] : menuData?.parentIds)}
        >
          {isAllExpanded ? '全部折叠' : '全部展开'}
        </Button>

        <LightFilter<API.SysMenuQueryBo>
          onFinish={async (values) => {
            setSelectedKeys([]);
            setExpandedKeys([]);
            setSearchParams(values);
          }}
        >
          <ProFormText name="menuName" label="菜单名称" />

          <ProFormSelect name="status" label="状态" valueEnum={EnableDisableStatusMap} />
        </LightFilter>
      </div>

      <Dropdown
        overlay={
          <Menu
            items={[
              {
                label: '新建',
                key: 'create',
                onClick: () => showCreateModal(true),
              },
              {
                label: '在根目录下新建',
                key: 'create',
                onClick: () => {
                  resetSelectedMenuId();
                  showCreateModal(true);
                },
              },
              {
                label: '删除',
                key: 'delete',
                danger: true,
                disabled: selectedKeys.length === 0,
                onClick: () => deleteMenu(selectedMenuId),
              },
            ]}
          />
        }
        trigger={['contextMenu']}
      >
        <div className="max-h-[60vh] overflow-auto">
          {menuData?.treeData.length ? (
            <Tree<API.SysMenu>
              blockNode
              selectedKeys={selectedKeys}
              onSelect={onSelect}
              expandedKeys={expandedKeys}
              titleRender={titleRender}
              onExpand={setExpandedKeys}
              showLine={{ showLeafIcon: false }}
              fieldNames={{
                title: 'menuName',
                key: 'menuId',
                children: 'children',
              }}
              treeData={menuData?.treeData}
              onRightClick={(e) => setSelectedKeys([e.node.key] as number[])}
            />
          ) : (
            <EmptySimple />
          )}
        </div>
      </Dropdown>
    </>
  );
};

export default TreeMenu;
