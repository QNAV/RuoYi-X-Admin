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
  [EnableDisableStatus.ENABLE, { text: '启用', status: 'Success' }],
  [EnableDisableStatus.DISABLE, { text: '禁用', status: 'Error' }],
]);

// 是/否
export enum YesNoStatus {
  YES = '0',
  NO = '1',
}
export const MapYesNoStatus: MapValueEnum<YesNoStatus> = new Map([
  [YesNoStatus.YES, { text: '是', status: 'Success' }],
  [YesNoStatus.NO, { text: '否', status: 'Error' }],
]);
