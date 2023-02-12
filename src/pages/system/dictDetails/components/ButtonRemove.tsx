import { BaseButtonRemove } from '@/components';
import { AccessWithState } from '@/features';
import { useAtomValueMainTableActions } from '@/pages/system/dictDetails/model';
import { sysDictDataPostRemove } from '@/services/system/System';
import { useMutation } from '@tanstack/react-query';
import { message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  dictCode: number[];
  batch?: boolean;
  disabled?: boolean;
}> = ({ dictCode, disabled, batch }) => {
  const mainTableActions = useAtomValueMainTableActions();

  const { mutateAsync, isLoading } = useMutation(sysDictDataPostRemove, {
    onSuccess: () => {
      mainTableActions?.reload();
      mainTableActions?.clearSelected?.();
      message.success('删除成功');
    },
  });

  const onRemove = () => {
    Modal.confirm({
      title: '操作确认',
      content: `确定删除字典编码为 ${dictCode} 的字典数据吗？`,
      onOk: () => mutateAsync({ dictCodes: dictCode }),
      okButtonProps: {
        loading: isLoading,
      },
    });
  };

  return (
    <AccessWithState accessKey="system:dict:edit">
      <BaseButtonRemove batch={batch} disabled={disabled} onClick={onRemove} />
    </AccessWithState>
  );
};

export default ButtonRemove;
