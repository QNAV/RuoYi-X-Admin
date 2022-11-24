import { Access } from '@/components';
import { sysUserPostImportTemplate } from '@/services/system/System';
import { UploadOutlined } from '@ant-design/icons';
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

  const { mutate: onDownLoad, isLoading: isDownLoadLoading } = useMutation(() => sysUserPostImportTemplate());

  return (
    <Access accessible>
      <Button icon={<UploadOutlined />} onClick={toggle}>
        导入
      </Button>

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
    </Access>
  );
};

export default ButtonImport;
