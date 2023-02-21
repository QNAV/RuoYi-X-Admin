import { AccessWithState } from '@/features';
import type { SysConfigEditBo } from '@/services/system/data-contracts';
import { sysConfigPostUpdateByKey } from '@/services/system/System';
import { useMutation } from '@tanstack/react-query';
import { App, Button } from 'antd';
import type { FC } from 'react';

interface ButtonPreviewConfigProps {
  configKey: string;
  onFinish: () => void;
  configValue: boolean;
}

const ButtonPreviewConfig: FC<ButtonPreviewConfigProps> = ({ configKey, configValue, onFinish }) => {
  const { modal } = App.useApp();

  const { mutate, isLoading } = useMutation(sysConfigPostUpdateByKey, {
    onSuccess: () => {
      onFinish();
    },
  });

  const handleUpdateConfigKey = () => {
    modal.confirm({
      title: '操作确认',
      content: `确定${configValue ? '停用' : '启用'}"预览列表图片"配置吗？`,
      okButtonProps: {
        loading: isLoading,
      },
      onOk: () => mutate({ configKey, configValue: `${!configValue}` } as unknown as SysConfigEditBo),
    });
  };

  return (
    <AccessWithState accessKey="system:oss:edit">
      <Button danger type="primary" ghost onClick={handleUpdateConfigKey}>
        预览开关：{configValue ? '启用' : '停用'}
      </Button>
    </AccessWithState>
  );
};

export default ButtonPreviewConfig;
