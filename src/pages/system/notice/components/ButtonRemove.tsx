import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useAtomValueMainTableActions } from '@/pages/system/dict/model';
import { SysNoticePostRemove } from '@/services/sys/SysNoticeService';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal, Typography } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  noticeId: number;
  noticeTitle: string;
  isBatch?: boolean;
  disabled?: boolean;
}> = ({ noticeId, noticeTitle, disabled, isBatch }) => {
  const text = isBatch ? '批量删除' : '删除';

  const { canRemoveSysDict } = useAtomValueAccess();

  const mainTableActions = useAtomValueMainTableActions();

  const { mutateAsync, isLoading } = useMutation(
    async (noticeId: number) => {
      await SysNoticePostRemove({ noticeIds: noticeId });
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
      content: (
        <>
          确定删除公告通知<Typography.Text code>{noticeTitle}</Typography.Text>吗？
        </>
      ),
      onOk: async () => mutateAsync(noticeId),
      okButtonProps: {
        loading: isLoading,
      },
    });
  };

  return (
    <Access accessible={canRemoveSysDict}>
      <Button type="link" danger disabled={disabled} icon={<DeleteOutlined />} onClick={onRemove}>
        {text}
      </Button>
    </Access>
  );
};

export default ButtonRemove;
