import { EmptySimple } from '@/components';
import type { MenuType } from '@/constants';
import { useQueryDictSysNormalDisable } from '@/models';
import TreeMenuHeaderTitle from '@/pages/system/menu/components/TreeMenuHeaderTitle';
import TreeMenuTitle from '@/pages/system/menu/components/TreeMenuTitle';
import {
  useAtomStateSelectedMenuData,
  useDeleteMenu,
  useQueryMenuList,
  useResetSelectedMenuData,
  useShowModalAdd,
} from '@/pages/system/menu/model';
import type { SysMenuQueryBo, SysMenuVo } from '@/services/system/data-contracts';
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import { LightFilter, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import type { TreeProps } from 'antd';
import { Button, Dropdown, Spin, Tree } from 'antd';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

export const menuTypeColor: Record<MenuType | string, string> = {
  M: 'blue',
  C: 'green',
  F: 'red',
};

const fieldNames = {
  title: 'menuName',
  key: 'menuId',
};

const TreeMenu: FC = () => {
  const [searchParams, setSearchParams] = useState<SysMenuQueryBo>({});

  const [selectedKey, setSelectedKey] = useState<number>(0);
  const [expandedKeys, setExpandedKeys] = useState<TreeProps['expandedKeys']>([]);

  const [selectedMenuData, setSelectedMenuData] = useAtomStateSelectedMenuData();
  const resetSelectedMenuId = useResetSelectedMenuData();

  const showCreateModal = useShowModalAdd();

  const { valueEnumSysNormalDisable } = useQueryDictSysNormalDisable();

  const {
    data: menuData,
    refetch,
    isFetching,
  } = useQueryMenuList(searchParams, (e) => {
    setExpandedKeys(e);
  });

  const deleteMenu = useDeleteMenu();

  const onSelect: TreeProps<SysMenuVo>['onSelect'] = (_, { node: { key } }) => {
    setSelectedKey(key as number);
  };
  const onRightClick: TreeProps<SysMenuVo>['onRightClick'] = ({ node }) => {
    setSelectedKey(node.key as number);
  };

  const isAllExpanded = expandedKeys?.length && expandedKeys?.length === menuData?.parentIds?.length;

  useEffect(() => {
    refetch();
  }, [searchParams]);

  useEffect(() => {
    if (selectedKey > 0) {
      setSelectedMenuData({
        hasSelected: true,
        selectedMenuId: selectedKey,
        selectedMenuName: menuData!.map.get(selectedKey)!.menuName,
      });
    } else {
      resetSelectedMenuId();
    }
  }, [selectedKey]);

  return (
    <>
      <TreeMenuHeaderTitle />

      <div className="flex justify-between items-center">
        <Button
          size="small"
          className="my-2"
          icon={isAllExpanded ? <CaretDownOutlined /> : <CaretRightOutlined />}
          onClick={() => setExpandedKeys(isAllExpanded ? [] : menuData?.parentIds)}
        >
          {isAllExpanded ? '全部折叠' : '全部展开'}
        </Button>

        <LightFilter<SysMenuQueryBo>
          onFinish={async (values) => {
            setSelectedKey(0);
            setExpandedKeys([]);
            setSearchParams(values);
          }}
        >
          <ProFormText name="menuName" label="菜单名称" />

          <ProFormSelect name="status" label="状态" valueEnum={valueEnumSysNormalDisable} />
        </LightFilter>
      </div>

      <Spin spinning={isFetching}>
        <Dropdown
          menu={{
            items: [
              {
                label: '新增',
                key: 'create',
                disabled: !selectedMenuData.hasSelected,
                onClick: () => showCreateModal(),
              },
              {
                label: '在根目录下新增',
                key: 'createBase',
                onClick: () => {
                  resetSelectedMenuId();
                  showCreateModal();
                },
              },
              {
                label: '删除',
                key: 'delete',
                danger: true,
                disabled: !selectedMenuData.hasSelected,
                onClick: () =>
                  deleteMenu({
                    menuId: selectedMenuData.selectedMenuId,
                    menuName: selectedMenuData.selectedMenuName,
                  }),
              },
            ],
          }}
          trigger={['contextMenu']}
        >
          {menuData?.treeData.length ? (
            <Tree<SysMenuVo>
              blockNode
              selectedKeys={[selectedKey]}
              onSelect={onSelect}
              expandedKeys={expandedKeys}
              titleRender={TreeMenuTitle}
              onExpand={setExpandedKeys}
              showLine={{ showLeafIcon: false }}
              fieldNames={fieldNames}
              height={700}
              treeData={menuData?.treeData}
              onRightClick={onRightClick}
            />
          ) : (
            <EmptySimple />
          )}
        </Dropdown>
      </Spin>
    </>
  );
};

export default TreeMenu;
