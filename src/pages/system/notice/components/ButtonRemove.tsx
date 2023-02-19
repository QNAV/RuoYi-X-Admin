import { BaseButtonRemove } from '@/components';
import { AccessWithState } from '@/features';
import { useAtomValueMainTableActions } from '@/pages/system/notice/model';
import { sysNoticePostRemove } from '@/services/system/System';
import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  noticeIds: number[];
  batch?: boolean;
  disabled?: boolean;
}> = ({ noticeIds, disabled, batch }) => {
  const mainTableActions = useAtomValueMainTableActions();

  const { message, modal } = App.useApp();

  const { mutate, isLoading } = useMutation(sysNoticePostRemove, {
    onSuccess: () => {
      mainTableActions?.reload();
      mainTableActions?.clearSelected?.();
      message.success('删除成功');
    },
  });

  const handleRemove = () => {
    modal.confirm({
      title: '操作确认',
      content: `确定删除公告编号为 ${noticeIds.join(',')} 的公告通知吗？`,
      onOk: () => mutate({ noticeIds }),
      okButtonProps: {
        loading: isLoading,
      },
    });
  };

  return (
    <AccessWithState accessKey="system:notice:remove">
      <BaseButtonRemove batch={batch} disabled={disabled} onClick={handleRemove} />
    </AccessWithState>
  );
};

export default ButtonRemove;
