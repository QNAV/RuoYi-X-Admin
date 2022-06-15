import type { MapValueEnum } from '@/types';

// 性别枚举
export enum Sex {
  MALE = '0',
  FEMALE = '1',
}
export const SexMap: MapValueEnum<Sex> = new Map([
  [Sex.MALE, { text: '男' }],
  [Sex.FEMALE, { text: '女' }],
]);

/**
 * 菜单类型
 */
export enum MenuType {
  M = 'M',
  C = 'C',
  F = 'F',
}
export const MapMenuType = {
  [MenuType.M]: { text: '目录' },
  [MenuType.C]: { text: '菜单' },
  [MenuType.F]: { text: '按钮' },
};

// 启用/禁用
export enum EnableDisableStatus {
  ENABLE = '0',
  DISABLE = '1',
}
export const MapEnableDisableStatus: MapValueEnum<EnableDisableStatus> = new Map([
  [EnableDisableStatus.ENABLE, { text: '启用' }],
  [EnableDisableStatus.DISABLE, { text: '禁用' }],
]);
