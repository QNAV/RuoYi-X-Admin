import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useAtomValueMainTableActions } from '@/pages/system/dict/model';
import { sysDictTypePostRemove } from '@/services/system/System';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  dictId: number;
  isBatch?: boolean;
  disabled?: boolean;
}> = ({ dictId, disabled, isBatch }) => {
  const text = isBatch ? '批量删除' : '删除';

  const { canRemoveSysDict } = useAtomValueAccess();

  const mainTableActions = useAtomValueMainTableActions();

  const { mutateAsync, isLoading } = useMutation(() => sysDictTypePostRemove({ dictIds: dictId }), {
    onSuccess: () => {
      mainTableActions?.reload();
      mainTableActions?.clearSelected?.();
      message.success('删除成功');
    },
  });

  const onRemove = () => {
    Modal.confirm({
      title: '删除字典',
      content: `确定删除字典编号为 ${dictId} 的字典吗？`,
      onOk: async () => mutateAsync(),
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
