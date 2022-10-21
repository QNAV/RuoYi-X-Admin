import { BaseProTable } from '@/components';
import { EnableDisableStatusMap } from '@/constants';
import ButtonAdd from '@/pages/system/notice/components/ButtonAdd';
import ButtonEdit from '@/pages/system/notice/components/ButtonEdit';
import ButtonRemove from '@/pages/system/notice/components/ButtonRemove';
import { useMainTableActionRef, useNoticeTypeDict } from '@/pages/system/notice/model';
import { SysNoticePostList } from '@/services/sys/SysNoticeService';
import { convertParams } from '@/utils';
import type { ProTableProps } from '@ant-design/pro-components';
import { Space } from 'antd';
import type { FC } from 'react';

const rowKey = 'noticeId';

const tableAlertRender: ProTableProps<API.SysNoticeVo, any>['tableAlertRender'] = ({ selectedRows }) => {
  return (
    <Space>
      <span>已选择 {selectedRows.length} 项</span>

      <ButtonRemove
        isBatch
        disabled={selectedRows.length === 0}
        noticeTitle={selectedRows.map((i) => i.noticeTitle).join(',')}
        noticeId={selectedRows.map((i) => i.noticeId).join(',') as unknown as number}
      />
    </Space>
  );
};

const TableMain: FC = () => {
  const actionRef = useMainTableActionRef();

  const { data: valueEnum } = useNoticeTypeDict();

  return (
    <BaseProTable
      rowKey={rowKey}
      actionRef={actionRef}
      columns={[
        { title: '序号', dataIndex: 'noticeId', key: 'noticeId', valueType: 'text', hideInSearch: true },
        { title: '公告标题', dataIndex: 'noticeTitle', key: 'noticeTitle', valueType: 'text' },
        {
          title: '公告类型',
          dataIndex: 'noticeType',
          key: 'noticeType',
          valueType: 'select',
          valueEnum: valueEnum ?? {},
        },
        { title: '创建者', dataIndex: 'createBy', key: 'createBy', valueType: 'text' },
        { title: '状态', dataIndex: 'status', key: 'status', valueType: 'select', valueEnum: EnableDisableStatusMap },
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
          render: (dom, entity: API.SysNoticeVo) => {
            return (
              <>
                <ButtonEdit record={entity} />
                <ButtonRemove noticeId={entity.noticeId} noticeTitle={entity.noticeTitle} />
              </>
            );
          },
        },
      ]}
      request={async (...p) => {
        return await SysNoticePostList(convertParams(...p));
      }}
      rowSelection={{
        alwaysShowAlert: true,
      }}
      tableAlertRender={tableAlertRender}
      toolbar={{
        actions: [<ButtonAdd key="ButtonAdd" />],
      }}
    />
  );
};

export default TableMain;
