import { BaseButtonRemove } from '@/components';
import { AccessWithState } from '@/features';
import { useAtomValueMainTableActions } from '@/pages/tool/gen/model';
import { genPostRemove } from '@/services/gen/Tool';
import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import type { FC } from 'react';

const ButtonDelete: FC<{ tableIds: number[]; batch?: boolean; disabled?: boolean }> = ({
  tableIds,
  batch = false,
  disabled = false,
}) => {
  const { message, modal } = App.useApp();

  const tableActions = useAtomValueMainTableActions();

  const { mutate, isLoading } = useMutation(genPostRemove, {
    onSuccess: () => {
      tableActions?.reload();
      tableActions?.clearSelected?.();

      message.success('删除成功');
    },
  });

  const handleDelete = () => {
    modal.confirm({
      title: '删除代码',
      content: `确定删除 表ID ${tableIds.join(',')} 生成的代码吗？`,
      okButtonProps: {
        loading: isLoading,
      },
      onOk: () => mutate({ tableIds }),
    });
  };

  return (
    <AccessWithState accessKey="tool:gen:remove">
      <BaseButtonRemove batch={batch} disabled={disabled} onClick={handleDelete} />
    </AccessWithState>
  );
};

export default ButtonDelete;
