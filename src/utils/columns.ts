import type { ProColumns, ProDescriptionsItemProps, ProFormColumnsType } from '@ant-design/pro-components';

type ColumnType = 'table' | 'form' | 'descriptions';

export function getColumn<T = any, ValueType = 'text'>(
  type: 'table',
  schema: ProColumns<T, ValueType>,
): ProColumns<T, ValueType>;
export function getColumn<T = any, ValueType = 'text'>(
  type: 'form',
  schema: ProFormColumnsType<T, ValueType>,
): ProFormColumnsType<T, ValueType>;
export function getColumn<T = Record<string, any>, ValueType = 'text'>(
  type: 'descriptions',
  schema: ProDescriptionsItemProps<T, ValueType>,
): ProDescriptionsItemProps<T, ValueType>;
export function getColumn(type: ColumnType, schema: any) {
  return schema;
}

export function mergeColumn<T = any, ValueType = 'text'>(
  oldSchema: ProColumns<T, ValueType>,
  newSchema: ProColumns,
): ProColumns<T, ValueType>;
export function mergeColumn<T = any, ValueType = 'text'>(
  oldSchema: ProFormColumnsType<T, ValueType>,
  newSchema: ProFormColumnsType,
): ProFormColumnsType<T, ValueType>;
export function mergeColumn<T = Record<string, any>, ValueType = 'text'>(
  oldSchema: ProDescriptionsItemProps<T, ValueType>,
  newSchema: ProDescriptionsItemProps,
): ProDescriptionsItemProps<T, ValueType>;
export function mergeColumn(oldSchema: any, newSchema: any) {
  return { ...oldSchema, ...newSchema };
}
