import { Access } from '@/components';
import { YNStatus, YNStatusMap } from '@/constants';
import { useAtomValueAccess } from '@/models';
import {
  useAtomValueAddOrEditModal,
  useAtomValueMainTableActions,
  useHideAddOrEditModal,
} from '@/pages/system/config/model';
import { SysConfigPostAdd, SysConfigPostUpdateByKey } from '@/services/sys/SysConfigService';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ModalForm, ProFormRadio, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { message } from 'antd';
import { useEffect, useRef } from 'react';

const ModalAddOrEdit = () => {
  const formRef = useRef<ProFormInstance>();

  const { canAddSysConfig, canEditSysConfig } = useAtomValueAccess();

  const mainTableActions = useAtomValueMainTableActions();

  const { open, actionType, record } = useAtomValueAddOrEditModal();
  const hideAddOrEditModal = useHideAddOrEditModal();
  const onCancel = () => {
    if (actionType === 'edit') {
      formRef.current?.resetFields();
    }
    hideAddOrEditModal();
  };

  useEffect(() => {
    if (open && actionType === 'edit') {
      const timer = setTimeout(() => {
        formRef.current?.setFieldsValue(record);
        clearTimeout(timer);
      }, 0);
    }
  }, [open]);

  return (
    <Access accessible={canAddSysConfig || canEditSysConfig}>
      <ModalForm<API.SysConfigAddBo>
        formRef={formRef}
        width={500}
        title={actionType === 'add' ? '新增字典类型' : '编辑字典类型'}
        open={open}
        modalProps={{
          onCancel,
          okText: '提交',
        }}
        onFinish={async (values) => {
          if (actionType === 'add') {
            await SysConfigPostAdd(values);
            message.success('新增成功');
          } else {
            await SysConfigPostUpdateByKey({ ...values, configId: record!.configId });
            message.success('编辑成功');
          }

          mainTableActions?.reload();

          hideAddOrEditModal();
          formRef.current?.resetFields();
        }}
      >
        <ProFormText name="configName" label="参数名称" required rules={[{ required: true }]} />

        <ProFormText name="configKey" label="参数键名" required rules={[{ required: true }]} />

        <ProFormText name="configValue" label="参数键值" required rules={[{ required: true }]} />

        <ProFormRadio.Group name="configType" label="系统内置" valueEnum={YNStatusMap} initialValue={YNStatus.YES} />

        <ProFormTextArea name="remark" label="备注" />
      </ModalForm>
    </Access>
  );
};

export default ModalAddOrEdit;
