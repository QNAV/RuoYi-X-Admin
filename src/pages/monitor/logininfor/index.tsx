import { BasePageContainer, BaseProTable } from '@/components';
import ButtonCleanUp from '@/pages/monitor/logininfor/components/ButtonCleanUp';
import ButtonExport from '@/pages/monitor/logininfor/components/ButtonExport';
import ButtonRemove from '@/pages/monitor/logininfor/components/ButtonRemove';
import { useMainTableActionRef } from '@/pages/monitor/logininfor/model';
import { SysLogininforPostList } from '@/services/sys/SysLoginService';
import { convertParams } from '@/utils';
import type { ProTableProps } from '@ant-design/pro-components';
import { Space } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';

const tableAlertRender: ProTableProps<any, any>['tableAlertRender'] = ({ selectedRows }) => {
  return (
    <Space>
      <span>已选择 {selectedRows.length} 项</span>

      <ButtonRemove
        isBatch
        disabled={selectedRows.length === 0}
        infoId={selectedRows.map((i) => i.infoId).join(',') as unknown as number}
      />
    </Space>
  );
};

const PageLoginInfo: FC = () => {
  const actionRef = useMainTableActionRef();

  const [searchParams, setSearchParams] = useState<API.SysLogininforPageQueryBo>({});

  return (
    <BasePageContainer>
      <BaseProTable
        rowKey="infoId"
        actionRef={actionRef}
        columns={[
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
          { title: '操作信息', dataIndex: 'msg', key: 'msg', valueType: 'text', hideInSearch: true },
          { title: '操作信息', dataIndex: 'msg', key: 'msg', valueType: 'text', hideInSearch: true },
          { title: '登录日期', dataIndex: 'loginTime', key: 'loginTime', valueType: 'dateTime', hideInSearch: true },
          {
            title: '操作',
            dataIndex: 'option',
            key: 'option',
            valueType: 'option',
            render: (dom, entity) => {
              return <ButtonRemove infoId={entity.infoId} />;
            },
            fixed: 'right',
          },
        ]}
        request={async (...p) => {
          const params = convertParams(...p);
          setSearchParams(params as API.SysLogininforPageQueryBo);
          return await SysLogininforPostList(params);
        }}
        toolbar={{
          actions: [
            <ButtonCleanUp key="ButtonCleanUp" />,
            <ButtonExport key="ButtonExport" searchParams={searchParams} />,
          ],
        }}
        rowSelection={{
          alwaysShowAlert: true,
        }}
        tableAlertRender={tableAlertRender}
      />
    </BasePageContainer>
  );
};

export default PageLoginInfo;
