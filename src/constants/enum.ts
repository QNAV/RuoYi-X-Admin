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

// 显示/隐藏
export enum ShowHideStatus {
  SHOW = '0',
  HIDE = '1',
}
export const MapShowHideStatus: MapValueEnum<ShowHideStatus> = new Map([
  [ShowHideStatus.SHOW, { text: '显示', status: 'Success' }],
  [ShowHideStatus.HIDE, { text: '隐藏', status: 'Error' }],
]);

// JAVA类型
export enum JavaType {
  STRING = 'String',
  INTEGER = 'Integer',
  LONG = 'Long',
  DOUBLE = 'Double',
  BOOLEAN = 'Boolean',
  DATE = 'Date',
  BIG_DECIMAL = 'BigDecimal',
}
export const MapJavaType: MapValueEnum<JavaType> = new Map([
  [JavaType.STRING, { text: '字符串' }],
  [JavaType.INTEGER, { text: '整数' }],
  [JavaType.LONG, { text: '长整数' }],
  [JavaType.DOUBLE, { text: '浮点数' }],
  [JavaType.BOOLEAN, { text: '布尔' }],
  [JavaType.DATE, { text: '日期' }],
  [JavaType.BIG_DECIMAL, { text: '金额' }],
]);

// 生成模版类型
export enum TemplateType {
  CRUD = 'CRUD',
  TREE = 'TREE',
  SUB = 'SUB',
}
export const MapTemplateType: MapValueEnum<TemplateType> = new Map([
  [TemplateType.CRUD, { text: '单表（增删改查）' }],
  [TemplateType.TREE, { text: '树表（增删改查）' }],
  [TemplateType.SUB, { text: '主子表（增删改查）' }],
]);
