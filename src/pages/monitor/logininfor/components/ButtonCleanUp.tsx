import { AccessWithState } from '@/components';
import { useAtomValueMainTableActions } from '@/pages/monitor/logininfor/model';
import { sysLogininforPostClean } from '@/services/system/Monitor';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonCleanUp: FC = () => {
  const mainTableActions = useAtomValueMainTableActions();

  const handleCleanUp = () => {
    Modal.confirm({
      title: '操作确认',
      content: '确认清空访问记录吗？',
      onOk: async () => {
        await sysLogininforPostClean();

        mainTableActions?.clearSelected?.();
        mainTableActions?.reload();

        message.success('清空成功');
      },
    });
  };

  return (
    <AccessWithState accessKey="monitor:logininfor:remove">
      <Button danger icon={<DeleteOutlined />} onClick={handleCleanUp}>
        清空
      </Button>
    </AccessWithState>
  );
};

export default ButtonCleanUp;
