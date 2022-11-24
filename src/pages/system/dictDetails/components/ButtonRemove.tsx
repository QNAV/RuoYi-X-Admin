import { Access } from '@/components';
import { useAtomValueMainTableActions } from '@/pages/system/dictDetails/model';
import { sysDictDataPostRemove } from '@/services/system/System';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  dictCode: number;
  isBatch?: boolean;
  disabled?: boolean;
}> = ({ dictCode, disabled, isBatch }) => {
  const text = isBatch ? '批量删除' : '删除';

  const mainTableActions = useAtomValueMainTableActions();

  const { mutateAsync, isLoading } = useMutation(
    async (dictCode: number) => {
      await sysDictDataPostRemove({ dictCodes: dictCode });
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
      title: '删除字典数据',
      content: `确定删除字典编码为 ${dictCode} 的字典数据吗？`,
      onOk: () => mutateAsync(dictCode),
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
