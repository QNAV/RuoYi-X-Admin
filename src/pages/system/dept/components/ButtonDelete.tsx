import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import {
  useAtomValueDeptDetails,
  useHideDeptDetails,
  useReFetchDeptList,
  useReFetchDeptOptions,
} from '@/pages/system/dept/model';
import { sysDeptPostRemove } from '@/services/system/System';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, message, Modal, Typography } from 'antd';
import type { FC } from 'react';

const ButtonDelete: FC = () => {
  const { canRemoveSysDept } = useAtomValueAccess();

  const { deptId, deptName, open } = useAtomValueDeptDetails();

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
        await sysDeptPostRemove({ deptId });
        message.success('删除成功');
        hideDeptDetails();
        reFetchDeptList();
        reFetchDeptOptions();
      },
    });
  };

  return (
    <Access accessible={open && canRemoveSysDept}>
      <Button danger ghost icon={<DeleteOutlined />} onClick={handleDelete}>
        删除
      </Button>
    </Access>
  );
};

export default ButtonDelete;
