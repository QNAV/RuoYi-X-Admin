import {
  ConfigActionType,
  configActionTypeTextMap,
  useAtomValueAddOrEditModal,
  useAtomValueMainTableActions,
  useHideAddOrEditModal,
} from '@/pages/system/config/model';
import { useFormColumns } from '@/pages/system/config/model/columns';
import type { SysConfigAddBo } from '@/services/system/data-contracts';
import { sysConfigPostAdd, sysConfigPostUpdateByKey } from '@/services/system/System';
import type { ProFormInstance } from '@ant-design/pro-components';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { App } from 'antd';
import { startTransition, useEffect, useRef } from 'react';

const ModalAddOrEdit = () => {
  const { message } = App.useApp();

  const formRef = useRef<ProFormInstance>();

  const mainTableActions = useAtomValueMainTableActions();

  const { open, actionType, record } = useAtomValueAddOrEditModal();
  const hideAddOrEditModal = useHideAddOrEditModal();
  const onCancel = () => {
    if (actionType === ConfigActionType.Edit) {
      formRef.current?.resetFields();
    }
    hideAddOrEditModal();
  };
  const actionTypeText = configActionTypeTextMap[actionType];

  const handleFinish = async (values: SysConfigAddBo) => {
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

  const formColumns = useFormColumns();

  useEffect(() => {
    if (open && actionType === ConfigActionType.Edit) {
      startTransition(() => {
        formRef.current?.setFieldsValue(record);
      });
    }
  }, [open]);

  return (
    <BetaSchemaForm<SysConfigAddBo>
      title={`${actionTypeText}参数设置`}
      layoutType="ModalForm"
      formRef={formRef}
      width={500}
      open={open}
      modalProps={{
        onCancel,
        okText: '提交',
      }}
      onFinish={handleFinish}
      columns={formColumns}
    />
  );
};

export default ModalAddOrEdit;
