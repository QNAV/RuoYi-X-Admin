import { useQueryDictSysNormalDisable } from '@/models';
import { useActionRefRoleList, useShowRoleDetails } from '@/pages/system/role/model';
import type { SysRoleVo } from '@/services/system/data-contracts';
import { sysRolePostList } from '@/services/system/System';
import { convertParams } from '@/utils';
import type { ProListMetas } from '@ant-design/pro-components';
import { ProList } from '@ant-design/pro-components';
import type { FC } from 'react';

const useMetas = (): ProListMetas<SysRoleVo> => {
  const { valueEnumSysNormalDisable } = useQueryDictSysNormalDisable();

  return {
    title: {
      title: '角色名称',
      dataIndex: 'roleName',
      valueType: 'text',
    },
    subTitle: {
      title: '状态',
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: valueEnumSysNormalDisable,
    },
    description: {
      title: '权限字符',
      dataIndex: 'roleKey',
      valueType: 'text',
    },
  };
};

const ListRole: FC = () => {
  const roleListActionRef = useActionRefRoleList();

  const showRoleDetails = useShowRoleDetails();

  const metas = useMetas();

  return (
    <ProList<SysRoleVo>
      ghost
      rowKey="roleId"
      actionRef={roleListActionRef}
      metas={metas}
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
      pagination={{
        defaultPageSize: 10,
        defaultCurrent: 1,
        showSizeChanger: true,
      }}
      request={(...p) => sysRolePostList(convertParams(...p))}
    />
  );
};

export default ListRole;
