import {
  CCreateTime,
  CCreateTimeRange,
  CEnableDisableStatus,
  CNickName,
  CUserDeptName,
  CUserId,
  CUserName,
  CUserPhone,
} from '@/columns';
import { WarpTableOption } from '@/components';
import { useRowClick } from '@/hooks';
import ButtonAdd from '@/pages/system/user/components/ButtonAdd';
import ButtonExport from '@/pages/system/user/components/ButtonExport';
import ButtonImport from '@/pages/system/user/components/ButtonImport';
import ButtonRemove from '@/pages/system/user/components/ButtonRemove';
import { useActionRefMainTable, useValueSelectedDeptId } from '@/pages/system/user/model';
import { SysUserPostList } from '@/services/sys/SysUserService';
import type { ProItem } from '@/typings';
import { convertParams } from '@/utils';
import type { ProTableProps } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import type { FC } from 'react';

const columns: ProItem[] = [
  CUserId,
  CUserName,
  CNickName,
  CUserDeptName,
  CUserPhone,
  CEnableDisableStatus,
  CCreateTime,
  CCreateTimeRange,
  {
    title: '操作',
    valueType: 'option',
    width: 200,
    render: (dom, entity: API.SysUserVo) => {
      return (
        <WarpTableOption>
          <ButtonRemove userId={entity.userId} userName={entity.userName} />
        </WarpTableOption>
      );
    },
  },
];

const rowKey = 'userId';

const tableAlertOptionRender: ProTableProps<API.SysUserVo, 'text'>['tableAlertOptionRender'] = ({ selectedRows }) => {
  const disabled = selectedRows.length === 0;

  return (
    <ButtonRemove
      disabled={disabled}
      isBatch
      userId={selectedRows.map((i) => i.userId).join(',') as unknown as number}
      userName={selectedRows.map((i) => i.userName).join(',')}
    />
  );
};

const TableMain: FC = () => {
  const actionRefMainTable = useActionRefMainTable();
  const selectedDeptId = useValueSelectedDeptId();
  const params = selectedDeptId > 0 ? { deptId: selectedDeptId } : {};

  const { rowSelection, onClick } = useRowClick(rowKey);

  return (
    <ProTable
      rowKey={rowKey}
      actionRef={actionRefMainTable}
      columns={columns}
      params={params}
      search={{
        span: {
          xs: 24,
          sm: 24,
          md: 12,
          lg: 12,
          xl: 12,
          xxl: 6,
        },
      }}
      onRow={(record) => ({
        onClick: () => onClick(record),
      })}
      rowSelection={rowSelection}
      tableAlertOptionRender={tableAlertOptionRender}
      request={(...p) => SysUserPostList(convertParams(...p))}
      toolbar={{
        actions: [
          <ButtonExport key="ButtonExport" />,
          <ButtonImport key="ButtonImport" />,
          <ButtonAdd key="ButtonAdd" />,
        ],
      }}
    />
  );
};

export default TableMain;
