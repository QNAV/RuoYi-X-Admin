import type {
  ProColumns,
  ProDescriptionsItemProps,
  ProFieldRequestData,
  ProFormColumnsType,
  ProSchemaValueEnumMap,
  ProSchemaValueEnumObj,
} from '@ant-design/pro-components';
import { merge } from 'lodash-es';
import type { Key, ReactNode } from 'react';

export type ValueEnum = ProSchemaValueEnumObj | ProSchemaValueEnumMap;

export interface ColumnItemCommonConfig {
  key?: string;
  dataIndex: string | number | Key[];
  title?: ReactNode;
  order?: number;
  valueEnum?: ValueEnum;
  hideInTable?: boolean;
  hideInSearch?: boolean;
  hideInDescriptions?: boolean;
  hideInForm?: boolean;
  request?: ProFieldRequestData;
}

export interface ColumnItem<RecordType, ValueType> extends ColumnItemCommonConfig {
  table?: ProColumns<RecordType, ValueType>;
  descriptions?: ProDescriptionsItemProps<RecordType, ValueType>;
  form?: ProFormColumnsType<RecordType, ValueType>;
}

type GenColumnItem = <RecordType = any, ValueType = 'text'>(
  config: ColumnItem<RecordType, ValueType>,
) => [
  ProColumns<RecordType, ValueType>,
  ProDescriptionsItemProps<RecordType, ValueType>,
  ProFormColumnsType<RecordType, ValueType>,
];

export const genColumnItem: GenColumnItem = ({ table = {}, descriptions = {}, form = {}, ...common }) => {
  return [merge({}, common, table), merge({}, common, descriptions), merge({}, common, form)];
};

export const mergeColumnItem = <T extends Record<string, any>>(column: T, newColumn: T): T => {
  return merge({}, column, newColumn);
};
