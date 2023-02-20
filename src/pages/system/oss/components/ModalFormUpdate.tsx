import { sysOssPostUploadSkipErrorHandler } from '@/services/system/System';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { useBoolean } from 'ahooks';
import type { UploadFile } from 'antd';
import { App, Button, Modal, Upload } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';

const { Dragger } = Upload;

const handleUploadFile = async (file: File) => {
  const {
    data: { code, msg },
  } = await sysOssPostUploadSkipErrorHandler(
    { file: '' },
    {
      file,
    },
  );

  if (code !== 200) {
    return Promise.reject(new Error(msg));
  }

  return msg;
};

const ModalFormUpdate: FC = () => {
  const [open, { toggle }] = useBoolean();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const { message, modal } = App.useApp();

  const { mutate: handleUpload, isLoading: isUploadLoading } = useMutation(handleUploadFile, {
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

  return (
    <>
      <Button type="primary" icon={<UploadOutlined />} onClick={toggle}>
        上传文件
      </Button>

      <Modal
        title="上传文件"
        open={open}
        onCancel={toggle}
        okText="提交"
        onOk={() => handleUpload(fileList[0].originFileObj as File)}
        okButtonProps={{
          loading: isUploadLoading,
        }}
      >
        <Dragger
          accept=".xlsx, .xls, .doc, .docx, .ppt, .pptx, .txt, .pdf"
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
          <p className="ant-upload-text">请上传大小不超过5MB格式为doc/xls/ppt/txt/pdf的文件</p>
        </Dragger>
      </Modal>
    </>
  );
};

export default ModalFormUpdate;
