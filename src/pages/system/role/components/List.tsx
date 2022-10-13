import { EnableDisableStatus } from '@/constants';
import { useRowClick } from '@/hooks';
import { useRoleListActionRef, useShowRoleDetails } from '@/pages/system/role/model';
import { SysRolePostList } from '@/services/sys/SysRoleService';
import { convertParams } from '@/utils';
import { ProList } from '@ant-design/pro-components';
import { Tag } from 'antd';
import type { FC } from 'react';
import { useEffect } from 'react';

const List: FC = () => {
  const roleListActionRef = useRoleListActionRef();

  const showRoleDetails = useShowRoleDetails();

  const { onClick, rowSelection, selectedRows } = useRowClick<API.SysRoleVo>('roleId', 'radio');

  useEffect(() => {
    if (selectedRows.length === 1) {
      showRoleDetails({
        roleId: selectedRows[0].roleId,
        roleName: selectedRows[0].roleName,
        visible: true,
      });
    }
  }, [selectedRows]);

  return (
    <ProList<API.SysRoleVo>
      ghost
      rowKey="roleId"
      actionRef={roleListActionRef}
      metas={{
        title: {
          dataIndex: 'roleName',
        },
        subTitle: {
          dataIndex: 'status',
          render: (e) => {
            return e === EnableDisableStatus.ENABLE ? (
              <Tag color="success">启用中</Tag>
            ) : (
              <Tag color="error">已禁用</Tag>
            );
          },
        },
      }}
      tableAlertRender={false}
      onRow={(record) => {
        return {
          onClick: () => onClick(record),
        };
      }}
      rowSelection={rowSelection}
      pagination={{
        defaultPageSize: 10,
        defaultCurrent: 1,
      }}
      request={(...params) => SysRolePostList(convertParams(...params))}
    />
  );
};

export default List;
