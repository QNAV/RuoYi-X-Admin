import {
  OssConfigActionType,
  OssConfigActionTypeTextMap,
  useAtomValueAddOrEditModal,
  useAtomValueMainTableActions,
  useFormColumns,
  useHideAddOrEditModal,
} from '@/pages/system/ossConfig/model';
import type { SysOssConfigAddBo } from '@/services/system/data-contracts';
import { sysOssConfigGetInfo, sysOssConfigPostAdd, sysOssConfigPostEdit } from '@/services/system/System';
import type { ProFormInstance } from '@ant-design/pro-components';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { useRequest } from 'ahooks';
import { App } from 'antd';
import type { FC } from 'react';
import { useRef, useTransition } from 'react';

const ModalAddOrEdit: FC = () => {
  const { message } = App.useApp();

  const formRef = useRef<ProFormInstance<SysOssConfigAddBo>>();

  const mainTableActions = useAtomValueMainTableActions();

  const { open, actionType, ossConfigId } = useAtomValueAddOrEditModal();
  const actionTypeText = OssConfigActionTypeTextMap[actionType];
  const hideAddOrEditModal = useHideAddOrEditModal();
  const onCancel = () => {
    if (actionType === OssConfigActionType.Edit) {
      formRef.current?.resetFields();
    }
    hideAddOrEditModal();
  };

  const [, startTransition] = useTransition();
  useRequest(() => sysOssConfigGetInfo({ ossConfigId: ossConfigId! }), {
    ready: open && OssConfigActionType.Edit && !!ossConfigId,
    onSuccess: (data) => {
      startTransition(() => {
        formRef.current?.setFieldsValue(data);
      });
    },
    refreshDeps: [open],
  });

  const handleFinish = async (values: SysOssConfigAddBo) => {
    if (actionType === OssConfigActionType.Add) {
      await sysOssConfigPostAdd(values);
    } else {
      await sysOssConfigPostEdit({ ossConfigId: ossConfigId!, ...values });
    }

    mainTableActions?.reload();
    formRef.current?.resetFields();

    hideAddOrEditModal();

    message.success(`${actionTypeText}成功`);
  };

  const formColumns = useFormColumns();

  return (
    <BetaSchemaForm<SysOssConfigAddBo>
      layoutType="ModalForm"
      title={`${actionTypeText}配置`}
      formRef={formRef}
      modalProps={{
        centered: true,
        okText: '提交',
        onCancel,
      }}
      width={680}
      open={open}
      onFinish={handleFinish}
      columns={formColumns}
    />
  );
};

export default ModalAddOrEdit;
