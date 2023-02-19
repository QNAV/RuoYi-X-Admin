import { BaseProTable } from '@/components';
import ButtonAdd from '@/pages/system/notice/components/ButtonAdd';
import ButtonRemove from '@/pages/system/notice/components/ButtonRemove';
import { useActionRefMainTable } from '@/pages/system/notice/model';
import { useTableColumns } from '@/pages/system/notice/model/columns';
import type { SysNoticePageQueryBo, SysNoticeVo } from '@/services/system/data-contracts';
import { sysNoticePostList } from '@/services/system/System';
import { convertParams } from '@/utils';
import type { ProTableProps } from '@ant-design/pro-components';
import type { FC } from 'react';

const tableAlertOptionRender: ProTableProps<SysNoticeVo, SysNoticePageQueryBo>['tableAlertOptionRender'] = ({
  selectedRowKeys,
}) => {
  return <ButtonRemove batch disabled={selectedRowKeys.length === 0} noticeIds={selectedRowKeys as number[]} />;
};

const TableMain: FC = () => {
  const actionRef = useActionRefMainTable();

  const columns = useTableColumns();

  return (
    <BaseProTable
      rowKey="noticeId"
      actionRef={actionRef}
      columns={columns}
      request={(...p) => sysNoticePostList(convertParams(...p))}
      tableAlertOptionRender={tableAlertOptionRender}
      toolbar={{
        actions: [<ButtonAdd key="ButtonAdd" />],
      }}
    />
  );
};

export default TableMain;
