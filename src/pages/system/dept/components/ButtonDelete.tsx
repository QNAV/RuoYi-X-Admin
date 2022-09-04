import { queryDeptListKey, useDeptDetailsVisibleValue, useHideDeptDetails } from '@/pages/system/dept/model';
import { SysDeptPostRemove } from '@/services/sys/SysDeptService';
import { Access, useAccess } from '@@/plugin-access';
import { DeleteOutlined } from '@ant-design/icons';
import { useQueryClient } from '@tanstack/react-query';
import { Button, message, Modal, Typography } from 'antd';
import type { FC } from 'react';

const ButtonDelete: FC = () => {
  const access = useAccess();

  const queryClient = useQueryClient();

  const { deptId, deptName, visible } = useDeptDetailsVisibleValue();

  const hideDeptDetails = useHideDeptDetails();

  const handleDelete = () => {
    Modal.confirm({
      title: '删除确认',
      content: (
        <>
          确定对<Typography.Text code>{deptName}</Typography.Text>进行
          <Typography.Text code>删除</Typography.Text>操作吗？
        </>
      ),
      onOk: async () => {
        await SysDeptPostRemove({ deptId });
        message.success('删除成功');
        hideDeptDetails();
        queryClient.invalidateQueries(queryDeptListKey);
      },
    });
  };

  return (
    <Access accessible={access.canRemoveSysDept}>
      <Button danger ghost icon={<DeleteOutlined />} disabled={!visible} onClick={handleDelete}>
        删除
      </Button>
    </Access>
  );
};

export default ButtonDelete;
