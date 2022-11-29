import { AccessWithState } from '@/components';
import { useQueryDictSysYesNo } from '@/models';
import {
  ConfigActionType,
  configActionTypeTextMap,
  useAtomValueAddOrEditModal,
  useAtomValueMainTableActions,
  useHideAddOrEditModal,
} from '@/pages/system/config/model';
import type { SysConfigAddBo } from '@/services/system/data-contracts';
import { sysConfigPostAdd, sysConfigPostUpdateByKey } from '@/services/system/System';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ModalForm, ProFormRadio, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { message } from 'antd';
import { startTransition, useEffect, useRef } from 'react';

const ModalAddOrEdit = () => {
  const formRef = useRef<ProFormInstance>();

  const mainTableActions = useAtomValueMainTableActions();

  const { defaultValueSysYesNo, valueEnumSysYesNo } = useQueryDictSysYesNo();

  const { open, actionType, record } = useAtomValueAddOrEditModal();
  const hideAddOrEditModal = useHideAddOrEditModal();
  const onCancel = () => {
    if (actionType === ConfigActionType.Edit) {
      formRef.current?.resetFields();
    }
    hideAddOrEditModal();
  };
  const actionTypeText = configActionTypeTextMap[actionType];

  const onFinish = async (values: SysConfigAddBo) => {
    if (actionType === ConfigActionType.Add) {
      await sysConfigPostAdd(values);
    } else {
      await sysConfigPostUpdateByKey({ ...values, configId: record!.configId });
    }

    hideAddOrEditModal();
    formRef.current?.resetFields();

    mainTableActions?.reload();

    message.success(`${actionTypeText}成功`);
  };

  useEffect(() => {
    if (open && actionType === ConfigActionType.Edit) {
      startTransition(() => {
        formRef.current?.setFieldsValue(record);
      });
    }
  }, [open]);

  return (
    <AccessWithState accessKey={['system:config:add', 'system:config:edit']}>
      <ModalForm<SysConfigAddBo>
        formRef={formRef}
        width={500}
        title={`${actionTypeText}参数设置`}
        open={open}
        modalProps={{
          onCancel,
          okText: '提交',
        }}
        onFinish={onFinish}
      >
        <ProFormText name="configName" label="参数名称" rules={[{ required: true }]} />

        <ProFormText name="configKey" label="参数键名" rules={[{ required: true }]} />

        <ProFormText name="configValue" label="参数键值" rules={[{ required: true }]} />

        <ProFormRadio.Group
          name="configType"
          label="系统内置"
          valueEnum={valueEnumSysYesNo}
          initialValue={defaultValueSysYesNo}
        />

        <ProFormTextArea name="remark" label="备注" />
      </ModalForm>
    </AccessWithState>
  );
};

export default ModalAddOrEdit;
