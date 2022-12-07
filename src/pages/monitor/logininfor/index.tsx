import { BasePageContainer, BaseProTable } from '@/components';
import ButtonCleanUp from '@/pages/monitor/logininfor/components/ButtonCleanUp';
import ButtonExport from '@/pages/monitor/logininfor/components/ButtonExport';
import ButtonRemove from '@/pages/monitor/logininfor/components/ButtonRemove';
import { useActionRefMainTable } from '@/pages/monitor/logininfor/model';
import type { SysLogininforPageQueryBo, SysLogininforVo } from '@/services/system/data-contracts';
import { sysLogininforPostList } from '@/services/system/Monitor';
import { convertParams } from '@/utils';
import type { ProColumns, ProTableProps } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useState } from 'react';

const columns: ProColumns<SysLogininforVo>[] = [
  { title: '访问编号', dataIndex: 'infoId', key: 'infoId', valueType: 'text', hideInSearch: true },
  { title: '用户名称', dataIndex: 'userName', key: 'userName', valueType: 'text' },
  { title: '登录地址', dataIndex: 'ipaddr', key: 'ipaddr', valueType: 'text' },
  {
    title: '登录地点',
    dataIndex: 'loginLocation',
    key: 'loginLocation',
    valueType: 'text',
    hideInSearch: true,
  },
  { title: '浏览器', dataIndex: 'browser', key: 'browser', valueType: 'text', hideInSearch: true },
  { title: '操作信息', dataIndex: 'msg', key: 'msg', valueType: 'text', hideInSearch: true },
  { title: '登录日期', dataIndex: 'loginTime', key: 'loginTime', valueType: 'dateTime', hideInSearch: true },
  {
    title: '操作',
    dataIndex: 'option',
    key: 'option',
    valueType: 'option',
    fixed: 'right',
    render: (dom, entity) => {
      return <ButtonRemove infoId={entity.infoId} />;
    },
  },
];

const tableAlertOptionRender: ProTableProps<SysLogininforVo, SysLogininforPageQueryBo>['tableAlertOptionRender'] = ({
  selectedRows,
}) => {
  return (
    <ButtonRemove
      batch
      disabled={selectedRows.length === 0}
      infoId={selectedRows.map((i) => i.infoId).join(',') as unknown as number}
    />
  );
};

const PageLoginInfo: FC = () => {
  const actionRef = useActionRefMainTable();

  const [searchParams, setSearchParams] = useState<SysLogininforPageQueryBo>({});

  return (
    <BasePageContainer>
      <BaseProTable<SysLogininforVo, SysLogininforPageQueryBo>
        rowKey="infoId"
        actionRef={actionRef}
        columns={columns}
        request={async (...p) => {
          const params = convertParams(...p);
          setSearchParams(params);
          return await sysLogininforPostList(params);
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

export default PageLoginInfo;
