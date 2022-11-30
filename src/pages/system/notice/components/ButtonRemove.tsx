import { AccessWithState, BaseButtonRemove } from '@/components';
import { useAtomValueMainTableActions } from '@/pages/system/notice/model';
import { sysNoticePostRemove } from '@/services/system/System';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  noticeId: number;
  batch?: boolean;
  disabled?: boolean;
}> = ({ noticeId, disabled, batch }) => {
  const mainTableActions = useAtomValueMainTableActions();

  const { mutateAsync, isLoading } = useMutation(sysNoticePostRemove, {
    onSuccess: async () => {
      mainTableActions?.reload();
      mainTableActions?.clearSelected?.();
      message.success('删除成功');
    },
  });

  const onRemove = () => {
    Modal.confirm({
      title: '操作确认',
      content: `确定删除公告编号为 ${noticeId} 的公告通知吗？`,
      onOk: async () => mutateAsync({ noticeIds: noticeId }),
      okButtonProps: {
        loading: isLoading,
      },
    });
  };

  return (
    <AccessWithState accessKey="system:notice:remove">
      <BaseButtonRemove batch={batch} disabled={disabled} icon={<DeleteOutlined />} onClick={onRemove} />
    </AccessWithState>
  );
};

export default ButtonRemove;
