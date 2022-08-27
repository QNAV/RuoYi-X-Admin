import { EnableDisableStatus } from '@/constants';
import { useRowClick } from '@/hooks';
import { useShowRoleDetails } from '@/pages/system/role/model';
import { SysRolePostList } from '@/services/sys/SysRoleService';
import { convertParams } from '@/utils';
import { ProList } from '@ant-design/pro-components';
import { Tag } from 'antd';
import type { FC } from 'react';
import { useEffect } from 'react';

const ListRole: FC = () => {
  const showRoleDetails = useShowRoleDetails();
  const { onClick, rowSelection, selectedRowKeys } = useRowClick<API.SysRoleVo>('roleId', 'radio');

  useEffect(() => {
    if (selectedRowKeys.length > 0) {
      showRoleDetails({
        roleId: selectedRowKeys[0] as number,
        visible: true,
      });
    }
  }, [selectedRowKeys]);

  return (
    <ProList<API.SysRoleVo>
      rowKey="roleId"
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
      request={async (...params) => {
        const { rows, total } = await SysRolePostList(convertParams(...params));

        return { data: rows, total, success: true };
      }}
    >
      1
    </ProList>
  );
};

export default ListRole;
