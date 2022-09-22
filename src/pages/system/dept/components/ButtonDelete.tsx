import { Access } from '@/components';
import { useAccess } from '@/models';
import {
  useHideDeptDetails,
  useReFetchDeptList,
  useReFetchDeptOptions,
  useValueDeptDetails,
} from '@/pages/system/dept/model';
import { SysDeptPostRemove } from '@/services/sys/SysDeptService';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, message, Modal, Typography } from 'antd';
import type { FC } from 'react';

const ButtonDelete: FC = () => {
  const access = useAccess();

  const { deptId, deptName, open } = useValueDeptDetails();

  const hideDeptDetails = useHideDeptDetails();
  const reFetchDeptList = useReFetchDeptList();
  const reFetchDeptOptions = useReFetchDeptOptions();

  const handleDelete = () => {
    Modal.confirm({
      title: '删除确认',
      content: (
        <>
          确定删除部门<Typography.Text code>{deptName}</Typography.Text>吗？
        </>
      ),
      onOk: async () => {
        await SysDeptPostRemove({ deptId });
        message.success('删除成功');
        hideDeptDetails();
        reFetchDeptList();
        reFetchDeptOptions();
      },
    });
  };

  return (
    <Access accessible={open && access.canRemoveSysDept}>
      <Button danger ghost icon={<DeleteOutlined />} onClick={handleDelete}>
        删除
      </Button>
    </Access>
  );
};

export default ButtonDelete;
