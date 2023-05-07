import { BasePageContainer, BaseProTable } from '@/components';
import { useQueryDictSysLoginStatus } from '@/models';
import ButtonCleanUp from '@/pages/monitor/logininfor/components/ButtonCleanUp';
import ButtonExport from '@/pages/monitor/logininfor/components/ButtonExport';
import ButtonRemove from '@/pages/monitor/logininfor/components/ButtonRemove';
import { useActionRefMainTable } from '@/pages/monitor/logininfor/model';
import type { SysLogininforPageQueryBo, SysLogininforVo } from '@/services/system/data-contracts';
import { sysLogininforPostList } from '@/services/system/Monitor';
import { convertParams } from '@/utils';
import type { ProColumns, ProTableProps } from '@ant-design/pro-components';
import { isArray } from 'lodash-es';
import type { FC } from 'react';
import { useState } from 'react';

const useColumns = (): ProColumns<SysLogininforVo>[] => {
  const { valueEnumSysLoginStatus } = useQueryDictSysLoginStatus();
  return [
    // 访问编号
    { title: '访问编号', dataIndex: 'infoId', key: 'infoId', valueType: 'text', hideInSearch: true },
    // 用户名称
    { title: '用户名称', dataIndex: 'userName', key: 'userName', valueType: 'text' },
    // 登录地址
    { title: '登录地址', dataIndex: 'ipaddr', key: 'ipaddr', valueType: 'text' },
    // 登录地点
    {
      title: '登录地点',
      dataIndex: 'loginLocation',
      key: 'loginLocation',
      valueType: 'text',
      hideInSearch: true,
    },
    // 浏览器
    { title: '浏览器', dataIndex: 'browser', key: 'browser', valueType: 'text', hideInSearch: true },
    // 操作系统
    { title: '操作系统', dataIndex: 'os', key: 'os', valueType: 'text', hideInSearch: true },
    // 登录状态
    {
      title: '登录状态',
      dataIndex: 'status',
      key: 'status',
      valueType: 'select',
      valueEnum: valueEnumSysLoginStatus,
    },
    // 操作信息
    { title: '操作信息', dataIndex: 'msg', key: 'msg', valueType: 'text', hideInSearch: true },
    // 登录时间
    { title: '登录时间', dataIndex: 'loginTime', key: 'loginTime', valueType: 'dateTime', hideInSearch: true },
    // 登录时间
    {
      title: '登录时间',
      dataIndex: 'dateTimeRange',
      key: 'dateTimeRange',
      valueType: 'dateTimeRange',
      hideInTable: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      key: 'option',
      valueType: 'option',
      fixed: 'right',
      render: (_dom, entity) => {
        return <ButtonRemove infoIds={[entity.infoId]} />;
      },
    },
  ];
};

const tableAlertOptionRender: ProTableProps<SysLogininforVo, SysLogininforPageQueryBo>['tableAlertOptionRender'] = ({
  selectedRowKeys,
}) => {
  return <ButtonRemove batch disabled={selectedRowKeys.length === 0} infoIds={selectedRowKeys as number[]} />;
};

const PageLoginInfo: FC = () => {
  const actionRef = useActionRefMainTable();

  const [searchParams, setSearchParams] = useState<SysLogininforPageQueryBo>({});

  const columns = useColumns();

  return (
    <BasePageContainer>
      <BaseProTable<SysLogininforVo, SysLogininforPageQueryBo & { dateTimeRange?: [string, string] }>
        rowKey="infoId"
        actionRef={actionRef}
        columns={columns}
        request={async (...p) => {
          const { dateTimeRange, ...params } = convertParams(...p);
          if (isArray(dateTimeRange)) {
            params.beginTime = dateTimeRange[0];
            params.endTime = dateTimeRange[1];
          }
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
