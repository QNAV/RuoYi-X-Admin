import { Icon } from '@/components';
import { MapEnableDisableStatus, MenuType } from '@/constants';
import { selectedMenuIdAtom, useDeleteMenu, useQueryMenuList, visibleCreateModalAtom } from '@/pages/system/menu/model';
import type { GetMenuListParams, MenuDataItem } from '@/services';
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import { LightFilter, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import type { TreeProps } from 'antd';
import { Button, Dropdown, Empty, Menu, Tag, Tree } from 'antd';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';

enum MenuTypeColor {
  M = 'blue',
  C = 'green',
  F = 'red',
}

const titleRender: TreeProps<MenuDataItem>['titleRender'] = (item) => {
  return (
    <>
      <Tag color="rgb(148 163 184)">{item.orderNum}</Tag>

      {item.icon && <Icon name={item.icon} className="mr-1" />}

      <Tag color={MenuTypeColor[item.menuType]} style={{ margin: '0 0 2px 0' }}>
        {item.menuName}
      </Tag>

      {item.perms && <Tag style={{ margin: '0 0 2px 2px' }}>{item.perms}</Tag>}
    </>
  );
};

const TreeTitle: FC = () => (
  <div className="mb-2">
    标签含义：
    <Tag color="rgb(148 163 184)">显示顺序</Tag>
    <Tag color={MenuTypeColor[MenuType.M]}>目录</Tag>
    <Tag color={MenuTypeColor[MenuType.C]}>菜单</Tag>
    <Tag color={MenuTypeColor[MenuType.F]}>按钮</Tag>
    <Tag>权限标识</Tag>
  </div>
);

const MenuTree = () => {
  const [searchParams, setSearchParams] = useState<GetMenuListParams>({});

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [expandedKeys, setExpandedKeys] = useState<TreeProps['expandedKeys']>([]);

  const [selectedMenuId, setSelectedMenuId] = useRecoilState(selectedMenuIdAtom);
  const resetSelectedMenuId = useResetRecoilState(selectedMenuIdAtom);

  const showCreateModal = useSetRecoilState(visibleCreateModalAtom);

  const { data: menuData, refetch } = useQueryMenuList(searchParams);

  const { mutate } = useDeleteMenu();

  const onSelect: TreeProps<MenuDataItem>['onSelect'] = (selectedKeys) => {
    setSelectedKeys(selectedKeys as string[]);
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
    <div>
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

        <LightFilter<GetMenuListParams>
          onFinish={async (values) => {
            setSelectedKeys([]);
            setExpandedKeys([]);
            setSearchParams(values);
          }}
        >
          <ProFormText name="menuName" label="菜单名称" />

          <ProFormSelect name="status" label="状态" valueEnum={MapEnableDisableStatus} />
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
                label: '在根目录新建',
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
                onClick: () => mutate(selectedMenuId),
              },
            ]}
          />
        }
        trigger={['contextMenu']}
      >
        {menuData?.treeData.length ? (
          <Tree<MenuDataItem>
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
            onRightClick={(e) => setSelectedKeys([e.node.key] as string[])}
          />
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </Dropdown>
    </div>
  );
};

export default MenuTree;
