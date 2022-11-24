import { Access } from '@/components';
import { useAtomValueMainTableActions } from '@/pages/system/notice/model';
import { sysNoticePostRemove } from '@/services/system/System';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  noticeId: number;
  isBatch?: boolean;
  disabled?: boolean;
}> = ({ noticeId, disabled, isBatch }) => {
  const text = isBatch ? '批量删除' : '删除';

  const mainTableActions = useAtomValueMainTableActions();

  const { mutateAsync, isLoading } = useMutation(
    async (noticeId: number) => {
      await sysNoticePostRemove({ noticeIds: noticeId });
    },
    {
      onSuccess: () => {
        mainTableActions?.reload();
        mainTableActions?.clearSelected?.();
        message.success('删除成功');
      },
    },
  );

  const onRemove = () => {
    Modal.confirm({
      title: '删除公告通知',
      content: `确定删除公告编号为 ${noticeId} 的公告通知吗？`,
      onOk: async () => mutateAsync(noticeId),
      okButtonProps: {
        loading: isLoading,
      },
    });
  };

  return (
    <Access accessible>
      <Button type="link" danger disabled={disabled} icon={<DeleteOutlined />} onClick={onRemove}>
        {text}
      </Button>
    </Access>
  );
};

export default ButtonRemove;
