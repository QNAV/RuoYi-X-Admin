import { MenuTypeMap, YesNoStatusMap } from '@/constants';
import type { ProItem } from '@/typings';
import { generateColumns } from '@/utils';

// 是否显示
export const CVisible: ProItem = {
  title: '是否显示',
  dataIndex: 'visible',
  key: 'visible',
  valueType: 'radio',
  valueEnum: YesNoStatusMap,
  tooltip: '选择否则路由将不会出现在侧边栏，但仍然可以访问',
};

// 是否外链
export const CIsFrame: ProItem = {
  title: '是否外链',
  dataIndex: 'isFrame',
  key: 'isFrame',
  valueType: 'radio',
  valueEnum: YesNoStatusMap,
  tooltip: '选择是外链则路由地址需要以`http(s)://`开头',
};

// 图标
export const CIcon: ProItem = {
  title: '图标',
  dataIndex: 'icon',
  key: 'icon',
  valueType: 'text',
  tooltip: 'https://ant.design/components/icon-cn/',
};

// 路由地址
export const CPath: ProItem = {
  title: '路由地址',
  dataIndex: 'path',
  key: 'path',
  valueType: 'text',
  tooltip: '访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头',
};

// 路由参数
export const CPathParams: ProItem = {
  title: '路由参数',
  dataIndex: 'queryParam',
  key: 'queryParam',
  valueType: 'code',
  tooltip: '访问路由的默认传递参数，如：{"id": 1, "name": "ry"}',
};

// 权限标识
export const CPerms: ProItem = {
  title: '权限标识',
  dataIndex: 'perms',
  key: 'perms',
  valueType: 'text',
  copyable: true,
};

// 菜单类型
export const [TMenuType, FMenuType, DMenuType] = generateColumns({
  title: '类型',
  dataIndex: 'menuType',
  key: 'menuType',
  valueType: 'select',
  valueEnum: MenuTypeMap,
  editable: false,
});

// 菜单名称
export const CMenuName: ProItem = {
  title: '名称',
  dataIndex: 'menuName',
  key: 'menuName',
  valueType: 'text',
};
