import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useAtomValueMainTableActions } from '@/pages/system/dict/model';
import { SysDictDataPostRemove } from '@/services/sys/SysDictDataService';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, message, Modal, Typography } from 'antd';
import type { FC } from 'react';

const ButtonRemove: FC<{
  dictCode: number;
  dictLabel: string;
  isBatch?: boolean;
  disabled?: boolean;
}> = ({ dictCode, dictLabel, disabled, isBatch }) => {
  const text = isBatch ? '批量删除' : '删除';

  const { canRemoveSysDict } = useAtomValueAccess();

  const mainTableActions = useAtomValueMainTableActions();

  const { mutateAsync, isLoading } = useMutation(
    async (dictCode: number) => {
      await SysDictDataPostRemove({ dictCodes: dictCode });
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
      content: (
        <>
          确定删除字典数据<Typography.Text code>{dictLabel}</Typography.Text>吗？
        </>
      ),
      onOk: async () => mutateAsync(dictCode),
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
