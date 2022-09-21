import type { ProTableProps } from '@ant-design/pro-components';
import { message } from 'antd';
import cloneDeep from 'lodash/cloneDeep';
import type { Key } from 'react';
import { useState } from 'react';

export const useRowClick = <T>(rowKey: keyof T, type: 'radio' | 'checkbox' = 'checkbox', alwaysShowAlert = true) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const rowSelection: ProTableProps<T, any>['rowSelection'] = {
    alwaysShowAlert,
    type,
    selectedRowKeys,
    onChange: (keys, rows) => {
      setSelectedRows(rows);
      setSelectedRowKeys(keys);
    },
  };

  const onClick = (record: T) => {
    const selectedRowKey = record[rowKey] as unknown as Key;

    let tempRows = [record];
    let tempRowKeys = [selectedRowKey];

    if (type === 'checkbox') {
      tempRowKeys = [...selectedRowKeys];
      tempRows = cloneDeep(selectedRows);

      if (tempRowKeys.includes(selectedRowKey)) {
        const index = selectedRowKeys.indexOf(selectedRowKey);
        tempRowKeys.splice(index, 1);
        tempRows.splice(index, 1);
      } else {
        tempRows.push(record);
        tempRowKeys.push(selectedRowKey);
      }
    }

    setSelectedRows(tempRows);
    setSelectedRowKeys(tempRowKeys);
  };

  const clearSelection = () => {
    setSelectedRows([]);
    setSelectedRowKeys([]);
  };

  const checkRowSelection = async (msg = '未选择需要操作的对象') => {
    if (selectedRows?.length === 0) {
      message.warning(msg);
      return Promise.reject(msg);
    }

    return Promise.resolve(selectedRows);
  };

  return {
    selectedRows,
    selectedRowKeys,
    rowSelection,
    onClick,
    clearSelection,
    setSelectedRowKeys,
    checkRowSelection,
  };
};
