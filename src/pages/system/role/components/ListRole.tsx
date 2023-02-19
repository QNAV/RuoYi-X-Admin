import { useActionRefRoleList, useShowRoleDetails } from '@/pages/system/role/model';
import { useMetas } from '@/pages/system/role/model/columns';
import type { SysRoleVo } from '@/services/system/data-contracts';
import { sysRolePostList } from '@/services/system/System';
import { ProList } from '@ant-design/pro-components';
import type { FC } from 'react';

const ListRole: FC = () => {
  const actionRef = useActionRefRoleList();

  const showRoleDetails = useShowRoleDetails();

  const metas = useMetas();

  return (
    <ProList<SysRoleVo>
      ghost
      rowKey="roleId"
      actionRef={actionRef}
      metas={metas}
      tableAlertRender={false}
      rowSelection={{
        type: 'radio',
        onSelect: ({ roleId }) => showRoleDetails(roleId),
      }}
      search={{
        filterType: 'light',
      }}
      pagination={{
        defaultPageSize: 10,
        defaultCurrent: 1,
        showSizeChanger: true,
      }}
      request={(params) => sysRolePostList(params)}
    />
  );
};

export default ListRole;
