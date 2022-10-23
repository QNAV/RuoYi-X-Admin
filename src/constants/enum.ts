export type ValueEnumMap<K> = Map<
  K,
  { text: string; status?: 'Default' | 'Error' | 'Success' | 'Processing' | 'Warning' }
>;

/**
 * 菜单类型
 */
export enum MenuType {
  // 目录
  M = 'M',
  // 菜单
  C = 'C',
  // 按钮
  F = 'F',
}
export const MenuTypeMap = {
  [MenuType.M]: { text: '目录' },
  [MenuType.C]: { text: '菜单' },
  [MenuType.F]: { text: '按钮' },
};

// 启用/禁用
export enum EnableDisableStatus {
  ENABLE = '0',
  DISABLE = '1',
}
export const EnableDisableStatusMap: ValueEnumMap<EnableDisableStatus> = new Map([
  [EnableDisableStatus.ENABLE, { text: '启用', status: 'Success' }],
  [EnableDisableStatus.DISABLE, { text: '禁用', status: 'Error' }],
]);

// 是/否
export enum YesNoStatus {
  NO = '0',
  YES = '1',
}
export const YesNoStatusMap: ValueEnumMap<YesNoStatus> = new Map([
  [YesNoStatus.YES, { text: '是', status: 'Success' }],
  [YesNoStatus.NO, { text: '否', status: 'Error' }],
]);

// 是/否
export enum YNStatus {
  YES = 'Y',
  NO = 'N',
}

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
export const JavaTypeMap: ValueEnumMap<JavaType> = new Map([
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
  CRUD = 'crud',
  TREE = 'tree',
  SUB = 'sub',
}
export const TemplateTypeMap: ValueEnumMap<TemplateType> = new Map([
  [TemplateType.CRUD, { text: '单表（增删改查）' }],
  [TemplateType.TREE, { text: '树表（增删改查）' }],
  [TemplateType.SUB, { text: '主子表（增删改查）' }],
]);

// 查询方式
export enum QueryType {
  EQ = 'EQ',
  NE = 'NE',
  GT = 'GT',
  GE = 'GE',
  LT = 'LT',
  LE = 'LE',
  LIKE = 'LIKE',
  BETWEEN = 'BETWEEN',
}
export const QueryTypeMap: ValueEnumMap<QueryType> = new Map([
  [QueryType.EQ, { text: '=' }],
  [QueryType.NE, { text: '!=' }],
  [QueryType.GT, { text: '>' }],
  [QueryType.GE, { text: '>=' }],
  [QueryType.LT, { text: '<' }],
  [QueryType.LE, { text: '<=' }],
  [QueryType.LIKE, { text: 'LIKE' }],
  [QueryType.BETWEEN, { text: 'BETWEEN' }],
]);

// 生成代码方式
export enum GenType {
  ZIP = '0',
  CUSTOM = '1',
}
export const GenTypeMap: ValueEnumMap<GenType> = new Map([
  [GenType.ZIP, { text: 'zip压缩包' }],
  [GenType.CUSTOM, { text: '自定义路径' }],
]);

// 枚举样式类型
export enum ListClass {
  NONE = 'none',
  DEFAULT = 'default',
  ERROR = 'error',
  SUCCESS = 'success',
  PROCESSING = 'processing',
  WARNING = 'warning',
}
export const ListClassMap: ValueEnumMap<ListClass> = new Map([
  [ListClass.NONE, { text: '无' }],
  [ListClass.DEFAULT, { text: '默认', status: 'Default' }],
  [ListClass.ERROR, { text: '错误', status: 'Error' }],
  [ListClass.SUCCESS, { text: '成功', status: 'Success' }],
  [ListClass.PROCESSING, { text: '进行中', status: 'Processing' }],
  [ListClass.WARNING, { text: '警告', status: 'Warning' }],
]);
