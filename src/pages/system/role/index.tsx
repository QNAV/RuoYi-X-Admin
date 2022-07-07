import {
  CCreateTime,
  CCreateTimeRange,
  CEnableDisableStatus,
  CRoleId,
  CRoleKey,
  CRoleName,
  CRoleSort,
} from '@/columns';
import { useInitActionType } from '@/hooks';
import ButtonCreate from '@/pages/system/role/components/ButtonCreate';
import ButtonDelete from '@/pages/system/role/components/ButtonDelete';
import { tableActionsAtom } from '@/pages/system/role/model';
import { SysRolePostList } from '@/services/sys/SysRoleService';
import { convertParams } from '@/utils';
import { ProTable } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';

export default function () {
  const actionRef = useInitActionType(tableActionsAtom);

  return (
    <PageContainer>
      <ProTable<API.SysRoleRes>
        rowKey="roleId"
        actionRef={actionRef}
        columns={[
          CRoleId,
          CEnableDisableStatus,
          CRoleName,
          CRoleKey,
          CRoleSort,
          CCreateTime,
          CCreateTimeRange,
          {
            title: '操作',
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => (
              <>
                <ButtonDelete roleIds={[record.roleId]} />
              </>
            ),
          },
        ]}
        request={async (...params) => {
          const { rows, total } = await SysRolePostList(convertParams(...params));

          return { data: rows, total, success: true };
        }}
        toolbar={{ actions: [<ButtonCreate key="ButtonCreate" />] }}
      />
    </PageContainer>
  );
}
