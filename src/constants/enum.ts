export enum DictStatus {
  DEFAULT = 'Default',
  ERROR = 'Error',
  SUCCESS = 'Success',
  PROCESSING = 'Processing',
  WARNING = 'Warning',
}
export type ValueEnumMap<K> = Map<K, { text: string; status?: DictStatus }>;

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
  [ListClass.DEFAULT, { text: '默认', status: DictStatus.DEFAULT }],
  [ListClass.PROCESSING, { text: '进行中', status: DictStatus.PROCESSING }],
  [ListClass.WARNING, { text: '警告', status: DictStatus.WARNING }],
  [ListClass.ERROR, { text: '错误', status: DictStatus.ERROR }],
  [ListClass.SUCCESS, { text: '成功', status: DictStatus.SUCCESS }],
]);
