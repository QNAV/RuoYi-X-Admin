import { SysUserOnlineGetList, SysUserOnlinePostForceLogout } from '@/services/sys/SysUserOnlineService';
import type { ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import type { FC } from 'react';

const columns: ProColumns[] = [
  {
    title: '用户名称',
    dataIndex: 'userName',
    valueType: 'text',
  },
  {
    title: '部门名称',
    dataIndex: 'deptName',
    valueType: 'text',
    hideInSearch: true,
  },
  {
    title: '登录IP地址',
    dataIndex: 'ipaddr',
    valueType: 'text',
  },
  {
    title: '登录地址',
    dataIndex: 'loginLocation',
    valueType: 'text',
    hideInSearch: true,
  },
  {
    title: '操作系统',
    dataIndex: 'os',
    valueType: 'text',
    hideInSearch: true,
  },
  {
    title: '浏览器类型',
    dataIndex: 'browser',
    valueType: 'text',
    hideInSearch: true,
  },
  {
    title: '登录时间',
    dataIndex: 'loginTime',
    valueType: 'date',
    hideInSearch: true,
  },
  {
    title: '操作',
    valueType: 'option',
    render: (dom, entity, index, action) => {
      return (
        <Button
          type="link"
          onClick={async () => {
            await SysUserOnlinePostForceLogout({ tokenId: entity.tokenId });
            action?.reload();
            message.success('强制退出成功');
          }}
        >
          强退
        </Button>
      );
    },
  },
];

const OnlinePage: FC = () => {
  return (
    <PageContainer>
      <ProTable
        rowKey="tokenId"
        columns={columns}
        request={async (params) => {
          const { data, total } = await SysUserOnlineGetList(params as API.SysUserOnlineGetListParams);

          return {
            data,
            total,
            success: true,
          };
        }}
      />
    </PageContainer>
  );
};

export default OnlinePage;
