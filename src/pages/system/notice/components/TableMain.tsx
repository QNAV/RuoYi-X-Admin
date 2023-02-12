import { BaseProTable } from '@/components';
import { useQueryDict } from '@/models';
import ButtonAdd from '@/pages/system/notice/components/ButtonAdd';
import ButtonEdit from '@/pages/system/notice/components/ButtonEdit';
import ButtonRemove from '@/pages/system/notice/components/ButtonRemove';
import { useActionRefMainTable } from '@/pages/system/notice/model';
import type { SysNoticePageQueryBo, SysNoticeVo } from '@/services/system/data-contracts';
import { sysNoticePostList } from '@/services/system/System';
import { convertParams } from '@/utils';
import type { ProColumns, ProTableProps } from '@ant-design/pro-components';
import type { FC } from 'react';

const useColumns = (): ProColumns[] => {
  const { data: dictSysNoticeType } = useQueryDict('sys_notice_type');
  const { data: dictSysNoticeStatus } = useQueryDict('sys_notice_status');

  return [
    { title: '公告编号', dataIndex: 'noticeId', key: 'noticeId', valueType: 'text', hideInSearch: true },
    { title: '公告标题', dataIndex: 'noticeTitle', key: 'noticeTitle', valueType: 'text' },
    {
      title: '公告类型',
      dataIndex: 'noticeType',
      key: 'noticeType',
      valueType: 'select',
      valueEnum: dictSysNoticeType?.valueEnum ?? {},
    },
    { title: '创建者', dataIndex: 'createBy', key: 'createBy', valueType: 'text' },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      valueType: 'select',
      valueEnum: dictSysNoticeStatus?.valueEnum ?? {},
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      valueType: 'dateTime',
      editable: false,
      hideInSearch: true,
      sorter: true,
    },
    {
      title: '操作',
      valueType: 'option',
      render: (dom, entity: SysNoticeVo) => {
        return (
          <>
            <ButtonEdit record={entity} />
            <ButtonRemove noticeId={[entity.noticeId]} />
          </>
        );
      },
    },
  ];
};

const tableAlertOptionRender: ProTableProps<SysNoticeVo, SysNoticePageQueryBo>['tableAlertOptionRender'] = ({
  selectedRowKeys,
}) => {
  return <ButtonRemove batch disabled={selectedRowKeys.length === 0} noticeId={selectedRowKeys as number[]} />;
};

const TableMain: FC = () => {
  const actionRef = useActionRefMainTable();

  const columns = useColumns();

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
