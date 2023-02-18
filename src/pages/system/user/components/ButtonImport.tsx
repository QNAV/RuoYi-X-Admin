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
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { FC } from 'react';
import { useState } from 'react';

const { Dragger } = Upload;

const ButtonImport: FC = () => {
  const [open, { toggle }] = useBoolean();
  const [checked, setChecked] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const { message, modal } = App.useApp();

  const { mutate: handleUpload, isLoading: isUploadLoading } = useMutation(async () => {
    const {
      data: { code, msg },
    } = await sysUserPostImportDataSkipErrorHandler(
      { updateSupport: checked },
      {
        file: fileList[0].originFileObj as File,
      },
    );

    if (code !== 200) {
      message.error(msg);
      return;
    }

    toggle();

    modal.info({
      title: '导入结果',
      content: msg,
    });
  });

  const { mutate: handleDownLoad, isLoading: isDownLoadLoading } = useMutation(async () => {
    const { data } = await sysUserPostImportTemplateSkipErrorHandler();
    await download(data, `user_template_${new Date().getTime()}.xlsx`);
  });

  const onCheckboxChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

  return (
    <AccessWithState accessKey="system:user:import">
      <BaseButtonImport onClick={toggle} />

      <Modal
        title="导入用户"
        open={open}
        onCancel={toggle}
        onOk={() => handleUpload()}
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
          <Checkbox checked={checked} onChange={onCheckboxChange}>
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
