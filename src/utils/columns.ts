import type {
  ProColumns,
  ProDescriptionsItemProps,
  ProFormColumnsType,
  ProSchema,
  ProSchemaComponentTypes,
} from '@ant-design/pro-components';
import { merge } from 'lodash-es';

type ProSchemaCommon<T = Record<string, any>, ValueType = 'text'> = ProSchema<
  T,
  {},
  ProSchemaComponentTypes,
  ValueType,
  any
>;
type ProSchemaTable<T = Record<string, any>, ValueType = 'text'> = Omit<
  ProColumns<T, ValueType>,
  keyof ProSchemaCommon<T, ValueType>
>;
type ProSchemaForm<T = Record<string, any>, ValueType = 'text'> = Omit<
  ProFormColumnsType<T, ValueType>,
  keyof ProSchemaCommon<T, ValueType>
>;
type ProSchemaDescriptions<T = Record<string, any>, ValueType = 'text'> = Omit<
  ProDescriptionsItemProps<T, ValueType>,
  keyof ProSchemaCommon<T, ValueType>
>;

export const generateColumns = <T = any, ValueType = 'text'>(
  commonSchema: ProSchemaCommon<T, ValueType>,
  schema?: {
    table?: ProSchemaTable<T, ValueType>;
    form?: ProSchemaForm<T, ValueType>;
    descriptions?: ProSchemaDescriptions<T, ValueType>;
  },
): [ProColumns<T, ValueType>, ProFormColumnsType<T, ValueType>, ProDescriptionsItemProps<T, ValueType>] => {
  return [
    { ...commonSchema, ...schema?.table },
    { ...(commonSchema as ProFormColumnsType<T, ValueType>), ...schema?.form },
    { ...commonSchema, ...schema?.descriptions },
  ];
};

type ColumnType = 'table' | 'form' | 'descriptions';
export function mergeColumn<T = Record<string, any>, ValueType = 'text'>(
  type: 'table',
  defaultSchema: ProColumns<T, ValueType>,
  newSchema: ProColumns<T, ValueType>,
): ProColumns<T, ValueType>;
export function mergeColumn<T = Record<string, any>, ValueType = 'text'>(
  type: 'form',
  defaultSchema: ProFormColumnsType<T, ValueType>,
  newSchema?: ProFormColumnsType<T, ValueType>,
): ProFormColumnsType<T, ValueType>;
export function mergeColumn<T = Record<string, any>, ValueType = 'text'>(
  type: 'descriptions',
  defaultSchema: ProDescriptionsItemProps<T, ValueType>,
  newSchema?: ProDescriptionsItemProps<T, ValueType>,
): ProDescriptionsItemProps<T, ValueType>;
export function mergeColumn(type: ColumnType, defaultSchema: any, newSchema: any) {
  return merge(defaultSchema, newSchema);
}
