import {
  CCreateTime,
  CCreateTimeRange,
  CEnableDisableStatus,
  CRoleId,
  CRoleKey,
  CRoleName,
  CRoleSort,
} from '@/columns';
import ButtonCreate from '@/pages/system/role/components/ButtonCreate';
import { SysRolePostList } from '@/services/swagger/SysRoleService';
import type { ActionType } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';
import { useRef } from 'react';

export default function () {
  const actionRef = useRef<ActionType>();

  return (
    <PageContainer>
      <ProTable
        actionRef={actionRef}
        columns={[CRoleId, CEnableDisableStatus, CRoleName, CRoleKey, CRoleSort, CCreateTime, CCreateTimeRange]}
        request={async () => await SysRolePostList({}, {})}
        toolbar={{ actions: [<ButtonCreate key="ButtonCreate" reloadTable={() => actionRef?.current?.reload()} />] }}
      />
    </PageContainer>
  );
}
