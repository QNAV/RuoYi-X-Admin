import { Access, BasePageContainer, BaseProTable } from '@/components';
import { useAtomValueAccess } from '@/models';
import { SysUserOnlineGetList, SysUserOnlinePostForceLogout } from '@/services/sys/SysUserOnlineService';
import { convertParams } from '@/utils';
import { DeleteOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const useColumns = (): ProColumns<API.SysUserOnlineVo>[] => {
  const { canForceLogoutMonitorOnline } = useAtomValueAccess();

  return [
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
      title: '主机',
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
      fixed: 'right',
      render: (dom, entity, index, action) => {
        return (
          <Access accessible={canForceLogoutMonitorOnline}>
            <Button
              icon={<DeleteOutlined />}
              danger
              type="link"
              onClick={async () => {
                Modal.confirm({
                  title: '强退用户',
                  content: `确定强退用户 ${entity.userName} 吗？`,
                  onOk: async () => {
                    await SysUserOnlinePostForceLogout({ tokenId: entity.tokenId });
                    action?.reload();
                    message.success('强制退出成功');
                  },
                });
              }}
            >
              强退
            </Button>
          </Access>
        );
      },
    },
  ];
};

const PageOnline: FC = () => {
  const columns = useColumns();

  return (
    <BasePageContainer>
      <BaseProTable<API.SysUserOnlineVo, API.SysUserOnlineGetListParams>
        rowKey="tokenId"
        scroll={{
          x: '105%',
        }}
        columns={columns}
        request={async (...p) => SysUserOnlineGetList(convertParams(...p))}
        rowSelection={false}
      />
    </BasePageContainer>
  );
};

export default PageOnline;
