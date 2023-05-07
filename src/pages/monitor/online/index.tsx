import { BasePageContainer, BaseProTable } from '@/components';
import ButtonForceLogout from '@/pages/monitor/online/components/ButtonForceLogout';
import { useActionRefMainTable } from '@/pages/monitor/online/model';
import type { SysUserOnlineVo } from '@/services/system/data-contracts';
import { sysUserOnlineGetList } from '@/services/system/Monitor';
import { convertParams } from '@/utils';
import type { ProColumns, ProTableProps } from '@ant-design/pro-components';
import type { FC } from 'react';

const columns: ProColumns<SysUserOnlineVo>[] = [
  { title: '序号', dataIndex: 'index', key: 'index', valueType: 'indexBorder' },
  {
    title: '会话编号',
    dataIndex: 'tokenId',
    key: 'tokenId',
    valueType: 'text',
    hideInSearch: true,
    ellipsis: true,
    copyable: true,
  },
  {
    title: '用户名称',
    dataIndex: 'userName',
    key: 'userName',
    valueType: 'text',
  },
  {
    title: '部门名称',
    dataIndex: 'deptName',
    key: 'deptName',
    valueType: 'text',
    hideInSearch: true,
  },
  {
    title: '主机地址',
    dataIndex: 'ipaddr',
    key: 'ipaddr',
    valueType: 'text',
  },
  {
    title: '登录地点',
    dataIndex: 'loginLocation',
    key: 'loginLocation',
    valueType: 'text',
    hideInSearch: true,
  },
  {
    title: '浏览器',
    dataIndex: 'browser',
    key: 'browser',
    valueType: 'text',
    hideInSearch: true,
  },
  {
    title: '操作系统',
    dataIndex: 'os',
    key: 'os',
    valueType: 'text',
    hideInSearch: true,
  },
  {
    title: '登录时间',
    dataIndex: 'loginTime',
    key: 'loginTime',
    valueType: 'dateTime',
    hideInSearch: true,
    sorter: true,
  },
  {
    title: '操作',
    valueType: 'option',
    render: (_dom, entity) => {
      return <ButtonForceLogout tokenId={entity.tokenId} userName={entity.userName} />;
    },
  },
];

interface Params {
  ipaddr?: string;
  userName?: string;
}

const tableAlertOptionRender: ProTableProps<SysUserOnlineVo, Params>['tableAlertOptionRender'] = ({ selectedRows }) => {
  return (
    <ButtonForceLogout
      batch
      disabled={selectedRows.length === 0}
      userName={selectedRows.map((i) => i.userName).join(',')}
      tokenId={selectedRows.map((i) => i.tokenId).join(',')}
    />
  );
};

const PageOnline: FC = () => {
  const actionRefMainTable = useActionRefMainTable();

  return (
    <BasePageContainer>
      <BaseProTable<SysUserOnlineVo, Params>
        rowKey="tokenId"
        scroll={{}}
        actionRef={actionRefMainTable}
        columns={columns}
        request={(...p) => sysUserOnlineGetList(convertParams(...p))}
        tableAlertOptionRender={tableAlertOptionRender}
      />
    </BasePageContainer>
  );
};

export default PageOnline;
