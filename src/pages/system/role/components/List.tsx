import { TRoleKey, TRoleName, useStatusNormalDisable } from '@/columns';
import { useActionRefRoleList, useSetSearchParams, useShowRoleDetails } from '@/pages/system/role/model';
import { SysRolePostList } from '@/services/sys/SysRoleService';
import { convertParams } from '@/utils';
import { ProList } from '@ant-design/pro-components';
import type { FC } from 'react';

const List: FC = () => {
  const roleListActionRef = useActionRefRoleList();

  const showRoleDetails = useShowRoleDetails();

  const setSearchParams = useSetSearchParams();

  const [TStatusNormalDisable] = useStatusNormalDisable();

  return (
    <ProList<API.SysRoleVo>
      ghost
      rowKey="roleId"
      actionRef={roleListActionRef}
      metas={{
        title: TRoleName,
        subTitle: TStatusNormalDisable,
        description: TRoleKey,
      }}
      tableAlertRender={false}
      rowSelection={{
        type: 'radio',
        onSelect: ({ roleId, roleName }) => {
          showRoleDetails(roleId, roleName);
        },
      }}
      search={{
        filterType: 'light',
      }}
      pagination={{
        defaultPageSize: 10,
        defaultCurrent: 1,
        showSizeChanger: true,
      }}
      request={async (...p) => {
        const params = convertParams(...p);
        setSearchParams(params);
        return await SysRolePostList(params);
      }}
    />
  );
};

export default List;
