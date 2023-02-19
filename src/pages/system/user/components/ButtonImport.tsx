import { BaseButtonImport } from '@/components';
import { AccessWithState } from '@/features';
import {
  sysUserPostImportDataSkipErrorHandler,
  sysUserPostImportTemplateSkipErrorHandler,
} from '@/services/system/System';
import { download } from '@/utils';
import { InboxOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { useBoolean } from 'ahooks';
import type { UploadFile } from 'antd';
import { App, Button, Checkbox, Modal, Upload } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';

const { Dragger } = Upload;

const handleDownLoadTemplate = async () => {
  const { data } = await sysUserPostImportTemplateSkipErrorHandler({
    format: 'blob',
  });

  await download(data, `user_template_${new Date().getTime()}.xlsx`);
};

interface HandleUploadProps {
  updateSupport: boolean;
  file: File;
}

const handleUploadTemplate = async ({ updateSupport, file }: HandleUploadProps) => {
  const {
    data: { code, msg },
  } = await sysUserPostImportDataSkipErrorHandler(
    { updateSupport },
    {
      file,
    },
  );

  if (code !== 200) {
    return Promise.reject(new Error(msg));
  }

  return msg;
};

const ButtonImport: FC = () => {
  const [open, { toggle }] = useBoolean();
  const [checked, setChecked] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const { message, modal } = App.useApp();

  const { mutate: handleUpload, isLoading: isUploadLoading } = useMutation(handleUploadTemplate, {
    onSuccess: (msg) => {
      toggle();

      modal.info({
        title: '导入结果',
        content: msg,
      });
    },
    onError: () => {
      message.error('导入失败');
    },
  });

  const { mutate: handleDownLoad, isLoading: isDownLoadLoading } = useMutation(handleDownLoadTemplate);

  return (
    <AccessWithState accessKey="system:user:import">
      <BaseButtonImport onClick={toggle} />

      <Modal
        title="导入用户"
        open={open}
        onCancel={toggle}
        onOk={() =>
          handleUpload({
            updateSupport: checked,
            file: fileList[0].originFileObj as File,
          })
        }
        okButtonProps={{
          loading: isUploadLoading,
        }}
      >
        <Dragger
          accept=".xlsx, .xls"
          maxCount={1}
          beforeUpload={() => false}
          onChange={(info) => setFileList(info.fileList)}
          fileList={fileList}
          onRemove={() => setFileList([])}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">点击或拖拽文件到此区域上传</p>
        </Dragger>

        <div className="flex flex-col items-center pt-2">
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
          >
            是否更新已经存在的用户数据
          </Checkbox>

          <div>
            <span>仅允许导入xls、xlsx格式文件</span>

            <Button type="link" onClick={() => handleDownLoad()} loading={isDownLoadLoading}>
              下载模板
            </Button>
          </div>
        </div>
      </Modal>
    </AccessWithState>
  );
};

export default ButtonImport;
