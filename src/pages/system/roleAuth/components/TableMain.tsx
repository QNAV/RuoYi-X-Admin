import { BaseProTable } from '@/components';
import { useQueryDict } from '@/models';
import ButtonAuth from '@/pages/system/roleAuth/components/ButtonAuth';
import DrawerTableAuth from '@/pages/system/roleAuth/components/DrawerTableAuth';
import { useActionRefMainTable } from '@/pages/system/roleAuth/model';
import type { SysUserPageQueryBo, SysUserVo } from '@/services/system/data-contracts';
import { sysRolePostAllocatedList } from '@/services/system/System';
import { convertParams, regEmail } from '@/utils';
import type { ProTableProps } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useParams } from 'react-router-dom';

const tableAlertRender: ProTableProps<SysUserVo, any>['tableAlertRender'] = ({ selectedRows }) => {
  return (
    <ButtonAuth
      userId={selectedRows.map((item) => item.userId)}
      userName={selectedRows.map((item) => item.userName).join(',')}
      isBatch
      disabled={selectedRows.length === 0}
    />
  );
};

const TableMain: FC = () => {
  const params = useParams<{ roleId: string }>();
  const roleId = Number(params.roleId);

  const actionRefMainTable = useActionRefMainTable();
  const { data: dictSysCommonStatus } = useQueryDict('sys_common_status');

  return (
    <BaseProTable<SysUserVo, SysUserPageQueryBo>
      rowKey="userId"
      actionRef={actionRefMainTable}
      params={{ roleId }}
      columns={[
        { dataIndex: 'userName', key: 'userName', title: '用户名称', valueType: 'text' },
        { dataIndex: 'nickName', key: 'nickName', title: '用户昵称', valueType: 'text', hideInSearch: true },
        {
          dataIndex: 'email',
          title: '邮箱',
          valueType: 'text',
          hideInSearch: true,
          formItemProps: {
            rules: [
              {
                required: true,
                message: '请输入邮箱',
              },
              {
                pattern: regEmail,
                message: '邮箱格式错误',
              },
            ],
          },
        },
        { dataIndex: 'phoneNumber', key: 'phoneNumber', title: '手机号码', valueType: 'text', copyable: true },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
          valueType: 'select',
          valueEnum: dictSysCommonStatus?.valueEnum ?? {},
          formItemProps: {
            initialValue: dictSysCommonStatus?.defaultValue,
            required: true,
            rules: [{ required: true, message: '请选择状态' }],
          },
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
          dataIndex: 'option',
          valueType: 'option',
          render: (_, record) => {
            return <ButtonAuth userId={record.userId} userName={record.userName} />;
          },
        },
      ]}
      request={(...p) => sysRolePostAllocatedList(convertParams(...p))}
      tableAlertRender={tableAlertRender}
      toolbar={{
        actions: [<DrawerTableAuth key="DrawerTableAuth" />],
      }}
    />
  );
};

export default TableMain;
