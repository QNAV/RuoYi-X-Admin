import type { ProColumns, ProDescriptionsItemProps, ProFormColumnsType } from '@ant-design/pro-components';

type ColumnType = 'table' | 'form' | 'descriptions';

export function getColumn<T = any, ValueType = 'text'>(type: 'table', schema: ProColumns): ProColumns<T, ValueType>;
export function getColumn<T = any, ValueType = 'text'>(
  type: 'form',
  schema: ProFormColumnsType,
): ProFormColumnsType<T, ValueType>;
export function getColumn<T = Record<string, any>, ValueType = 'text'>(
  type: 'descriptions',
  schema: ProDescriptionsItemProps,
): ProDescriptionsItemProps<T, ValueType>;
export function getColumn(type: ColumnType, schema: any) {
  return schema;
}
