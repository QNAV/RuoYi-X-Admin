import { BaseTableAlert } from '@/components';
import type { ProTableProps } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { cloneElement } from 'react';

const defaultTableProps: ProTableProps<Record<string, any>, Record<string, any>> = {
  scroll: {
    x: 'max-content',
  },
  pagination: {
    defaultCurrent: 1,
    defaultPageSize: 10,
    showSizeChanger: true,
  },
  rowSelection: {
    alwaysShowAlert: true,
  },
  search: {
    defaultCollapsed: false,
    span: {
      xs: 24,
      sm: 24,
      md: 12,
      lg: 12,
      xl: 8,
      xxl: 6,
    },
    labelWidth: 'auto',
  },
  options: {
    reload: true,
    setting: true,
    density: true,
  },
  defaultSize: 'small',
  tableAlertRender: ({ selectedRowKeys, onCleanSelected }) => {
    return <BaseTableAlert selectedNum={selectedRowKeys.length} onCleanSelected={onCleanSelected} />;
  },
};

export const BaseProTable = <
  DataType extends Record<string, any>,
  Params extends Record<string, any> = Record<string, any>,
  ValueType = 'text',
>(
  props: ProTableProps<DataType, Params, ValueType>,
) => {
  return cloneElement(<ProTable {...defaultTableProps} />, props);
};
