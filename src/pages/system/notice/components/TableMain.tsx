import { CCreateBy, CCreateTime, CEnableDisableStatus } from '@/columns';
import { CNoticeId, CNoticeTitle, CNoticeType } from '@/columns/notice';
import { BaseProTable } from '@/components';
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

  const { data } = useNoticeTypeDict();
  console.log(data);
  return (
    <BaseProTable
      rowKey={rowKey}
      actionRef={actionRef}
      columns={[
        CNoticeId,
        CNoticeTitle,
        CNoticeType,
        CCreateBy,
        CEnableDisableStatus,
        CCreateTime,
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
