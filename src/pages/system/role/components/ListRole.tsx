import { useQueryDict } from '@/models';
import { useActionRefRoleList, useSetSearchParams, useShowRoleDetails } from '@/pages/system/role/model';
import { SysRolePostList } from '@/services/sys/SysRoleService';
import { convertParams } from '@/utils';
import { ProList } from '@ant-design/pro-components';
import type { FC } from 'react';

const ListRole: FC = () => {
  const roleListActionRef = useActionRefRoleList();

  const showRoleDetails = useShowRoleDetails();

  const setSearchParams = useSetSearchParams();

  const { data } = useQueryDict('sys_normal_disable');

  return (
    <ProList<API.SysRoleVo>
      ghost
      rowKey="roleId"
      actionRef={roleListActionRef}
      metas={{
        title: {
          title: '角色名称',
          dataIndex: 'roleName',
          key: 'roleName',
          valueType: 'text',
          formItemProps: {
            required: true,
            rules: [{ required: true, message: '请输入角色名称' }],
          },
        },
        subTitle: {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
          valueType: 'select',
          valueEnum: data?.mapData ?? {},
        },
        description: {
          title: '权限字符',
          dataIndex: 'roleKey',
          key: 'roleKey',
          valueType: 'text',
          tooltip: "控制器中定义的权限字符，如：@PreAuthorize(`@ss.hasRole('admin')`)",
          formItemProps: {
            required: true,
            rules: [{ required: true, message: '请输入权限字符' }],
          },
        },
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
        return await SysRolePostList(params);
      }}
    />
  );
};

export default ListRole;
