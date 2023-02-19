import { BaseButtonRemove } from '@/components';
import { AccessWithState } from '@/features';
import {
  useAtomValueDeptDetails,
  useHideDeptDetails,
  useReFetchDeptList,
  useReFetchDeptOptions,
} from '@/pages/system/dept/model';
import { sysDeptPostRemove } from '@/services/system/System';
import { App, Typography } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC = () => {
  const { deptId, deptName, open } = useAtomValueDeptDetails();
  const hideDeptDetails = useHideDeptDetails();

  const reFetchDeptList = useReFetchDeptList();
  const reFetchDeptOptions = useReFetchDeptOptions();

  const { message, modal } = App.useApp();

  const handleRemove = () => {
    modal.confirm({
      title: '删除确认',
      content: (
        <>
          确定删除部门<Typography.Text code>{deptName}</Typography.Text>吗？
        </>
      ),
      onOk: async () => {
        await sysDeptPostRemove({ deptId });

        await Promise.all([hideDeptDetails(), reFetchDeptList(), reFetchDeptOptions()]);

        message.success('删除成功');
      },
    });
  };

  return (
    <AccessWithState accessKey="system:dept:remove">
      <BaseButtonRemove disabled={!open} type="primary" size="middle" onClick={handleRemove} />
    </AccessWithState>
  );
};

export default ButtonRemove;
