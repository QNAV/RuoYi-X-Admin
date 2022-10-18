import type { ProTableProps } from '@ant-design/pro-components';
import { ProTable as Table } from '@ant-design/pro-components';
import { cloneElement } from 'react';

export const BaseProTable = <
  DataType extends Record<string, any>,
  Params extends Record<string, any> = Record<string, any>,
  ValueType = 'text',
>(
  props: ProTableProps<DataType, Params, ValueType>,
) => {
  const DefaultTableProps: ProTableProps<DataType, Params, ValueType> = {
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
  };

  return cloneElement(<Table {...DefaultTableProps} />, props);
};
