import { useQueryDict } from '@/models';
import { useActionRefRoleList, useSetSearchParams, useShowRoleDetails } from '@/pages/system/role/model';
import type { SysRoleVo } from '@/services/system/data-contracts';
import { sysRolePostList } from '@/services/system/System';
import { convertParams } from '@/utils';
import { ProList } from '@ant-design/pro-components';
import type { FC } from 'react';

const ListRole: FC = () => {
  const roleListActionRef = useActionRefRoleList();

  const showRoleDetails = useShowRoleDetails();

  const setSearchParams = useSetSearchParams();

  const { data } = useQueryDict('sys_normal_disable');

  return (
    <ProList<SysRoleVo>
      ghost
      rowKey="roleId"
      actionRef={roleListActionRef}
      metas={{
        title: {
          title: '角色名称',
          dataIndex: 'roleName',
          valueType: 'text',
          formItemProps: {
            required: true,
            rules: [{ required: true, message: '请输入角色名称' }],
          },
        },
        subTitle: {
          title: '状态',
          dataIndex: 'status',
          valueType: 'select',
          valueEnum: data?.mapData ?? {},
        },
        description: {
          title: '权限字符',
          dataIndex: 'roleKey',
          valueType: 'text',
          formItemProps: {
            required: true,
            rules: [{ required: true, message: '请输入权限字符' }],
          },
        },
      }}
      tableAlertRender={false}
      rowSelection={{
        type: 'radio',
        onSelect: ({ roleId }) => {
          showRoleDetails(roleId);
        },
      }}
      search={{
        filterType: 'light',
      }}
      options={{
        setting: false,
        fullScreen: false,
        density: false,
        reload: true,
      }}
      pagination={{
        defaultPageSize: 10,
        defaultCurrent: 1,
        showSizeChanger: true,
      }}
      request={async (...p) => {
        const params = convertParams(...p);
        setSearchParams(params);
        return await sysRolePostList(params);
      }}
    />
  );
};

export default ListRole;
