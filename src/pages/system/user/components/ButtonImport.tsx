import { BaseButtonImport } from '@/components';
import { AccessWithState } from '@/features';
import { sysUserPostImportTemplateSkipErrorHandler } from '@/services/system/System';
import { download } from '@/utils';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ProForm, ProFormSwitch, ProFormUploadDragger } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { useBoolean } from 'ahooks';
import { Button, Modal } from 'antd';
import type { FC } from 'react';
import { useRef } from 'react';

const ButtonImport: FC = () => {
  const formRef = useRef<ProFormInstance>();

  const [open, { toggle }] = useBoolean();

  const { mutate: onDownLoad, isLoading: isDownLoadLoading } = useMutation(async () => {
    const { data } = await sysUserPostImportTemplateSkipErrorHandler();
    await download(data, `user_template_${new Date().getTime()}.xlsx`);
  });

  return (
    <AccessWithState accessKey="system:user:import">
      <BaseButtonImport onClick={toggle} />

      <Modal title="导入用户" open={open} onCancel={toggle}>
        <div className="text-right">
          <Button type="link" onClick={() => onDownLoad()} loading={isDownLoadLoading}>
            下载模板
          </Button>
        </div>

        <ProForm layout="horizontal" submitter={false} formRef={formRef}>
          <ProFormSwitch name="isCover" label="是否更新已经存在的用户数据" />

          <ProFormUploadDragger name="list" />
        </ProForm>
      </Modal>
    </AccessWithState>
  );
};

export default ButtonImport;
