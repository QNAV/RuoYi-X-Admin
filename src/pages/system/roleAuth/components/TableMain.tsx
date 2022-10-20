import { TCreateTime, TEmail, TNickName, TPhoneNumber, TUserName, useStatusNormalDisable } from '@/columns';
import { BaseProTable, BaseTableAlert } from '@/components';
import ButtonAuth from '@/pages/system/roleAuth/components/ButtonAuth';
import DrawerTableAuth from '@/pages/system/roleAuth/components/DrawerTableAuth';
import { useActionRefMainTable } from '@/pages/system/roleAuth/model';
import { SysRolePostAllocatedList } from '@/services/sys/SysRoleService';
import { convertParams } from '@/utils';
import type { ProTableProps } from '@ant-design/pro-components';
import type { FC } from 'react';
import { useParams } from 'react-router-dom';

const tableAlertRender: ProTableProps<API.SysUserVo, any>['tableAlertRender'] = ({ selectedRows }) => {
  return (
    <BaseTableAlert selectedNum={selectedRows.length}>
      <ButtonAuth
        userId={selectedRows.map((item) => item.userId)}
        userName={selectedRows.map((item) => item.userName).join(',')}
        isBatch
        disabled={selectedRows.length === 0}
      />
    </BaseTableAlert>
  );
};

const TableMain: FC = () => {
  const params = useParams<{ roleId: string }>();
  const roleId = Number(params.roleId);

  const actionRefMainTable = useActionRefMainTable();

  const [TStatusNormalDisable] = useStatusNormalDisable();

  return (
    <BaseProTable<API.SysUserVo, API.SysUserPageQueryBo>
      rowKey="userId"
      actionRef={actionRefMainTable}
      params={{ roleId }}
      columns={[
        TUserName,
        TNickName,
        TEmail,
        TPhoneNumber,
        TStatusNormalDisable,
        TCreateTime,
        {
          title: '操作',
          dataIndex: 'option',
          valueType: 'option',
          render: (_, record) => {
            return <ButtonAuth userId={record.userId} userName={record.userName} />;
          },
        },
      ]}
      request={(...p) => SysRolePostAllocatedList(convertParams(...p))}
      tableAlertRender={tableAlertRender}
      toolbar={{
        actions: [<DrawerTableAuth key="DrawerTableAuth" />],
      }}
    />
  );
};

export default TableMain;
