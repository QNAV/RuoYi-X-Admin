import { BasePageContainer, BaseProTable } from '@/components';
import { useQueryDict } from '@/models';
import ButtonCleanUp from '@/pages/monitor/operlog/components/ButtonCleanUp';
import ButtonExport from '@/pages/monitor/operlog/components/ButtonExport';
import ButtonRemove from '@/pages/monitor/operlog/components/ButtonRemove';
import { useActionRefMainTable } from '@/pages/monitor/operlog/model';
import type { SysOperLogPageQueryBo, SysOperLogVo } from '@/services/system/data-contracts';
import { sysOperLogPostList } from '@/services/system/Monitor';
import { convertParams } from '@/utils';
import type { ProColumns, ProTableProps } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useState } from 'react';

const useColumns = (): ProColumns<SysOperLogVo>[] => {
  const { data: dictSysCommonStatus } = useQueryDict('sys_common_status');
  const { data: dictSysOperType } = useQueryDict('sys_oper_type');

  return [
    { title: '日志编号', dataIndex: 'operId', key: 'operId', valueType: 'text', hideInSearch: true },
    { title: '系统模块', dataIndex: 'title', key: 'title', valueType: 'text' },
    {
      title: '操作类型',
      dataIndex: 'businessType',
      key: 'businessType',
      valueType: 'select',
      valueEnum: dictSysOperType?.mapData ?? {},
    },
    {
      title: '请求方式',
      dataIndex: 'requestMethod',
      key: 'requestMethod',
      valueType: 'text',
      hideInSearch: true,
    },
    { title: '操作人员', dataIndex: 'operName', key: 'operName', valueType: 'text' },
    { title: '操作地址', dataIndex: 'operIp', key: 'operIp', valueType: 'text', hideInSearch: true },
    { title: '操作地点', dataIndex: 'operLocation', key: 'operLocation', valueType: 'text', hideInSearch: true },
    {
      title: '操作状态',
      dataIndex: 'status',
      key: 'status',
      valueType: 'select',
      valueEnum: dictSysCommonStatus?.mapData ?? {},
    },
    { title: '操作日期', dataIndex: 'operTime', key: 'operTime', valueType: 'dateTime', hideInSearch: true },
    {
      title: '操作',
      dataIndex: 'option',
      key: 'option',
      valueType: 'option',
      fixed: 'right',
      render: (dom, entity) => {
        return <ButtonRemove operId={entity.operId} />;
      },
    },
  ];
};

const tableAlertOptionRender: ProTableProps<SysOperLogVo, SysOperLogPageQueryBo>['tableAlertOptionRender'] = ({
  selectedRows,
}) => {
  return (
    <ButtonRemove
      isBatch
      disabled={selectedRows.length === 0}
      operId={selectedRows.map((i) => i.operId).join(',') as unknown as number}
    />
  );
};

const PageOperlog: FC = () => {
  const actionRef = useActionRefMainTable();

  const columns = useColumns();

  const [searchParams, setSearchParams] = useState<SysOperLogPageQueryBo>({});

  return (
    <BasePageContainer>
      <BaseProTable<SysOperLogVo, SysOperLogPageQueryBo>
        rowKey="operId"
        actionRef={actionRef}
        columns={columns}
        request={async (...p) => {
          const params = convertParams(...p);
          setSearchParams(params as SysOperLogPageQueryBo);
          return await sysOperLogPostList(params);
        }}
        toolbar={{
          actions: [
            <ButtonCleanUp key="ButtonCleanUp" />,
            <ButtonExport key="ButtonExport" searchParams={searchParams} />,
          ],
        }}
        tableAlertOptionRender={tableAlertOptionRender}
      />
    </BasePageContainer>
  );
};

export default PageOperlog;
