import {
  NoticeActionType,
  noticeActionTypeTextMap,
  useAtomValueAddOrEditModal,
  useAtomValueMainTableActions,
  useHideAddOrEditModal,
} from '@/pages/system/notice/model';
import { useFormColumns } from '@/pages/system/notice/model/columns';
import type { SysNoticeAddBo } from '@/services/system/data-contracts';
import { sysNoticePostAdd, sysNoticePostEdit } from '@/services/system/System';
import type { ProFormInstance } from '@ant-design/pro-components';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { message } from 'antd';
import { startTransition, useEffect, useRef } from 'react';

const ModalAddOrEdit = () => {
  const formRef = useRef<ProFormInstance>();

  const mainTableActions = useAtomValueMainTableActions();

  const { open, actionType, record } = useAtomValueAddOrEditModal();
  const hideAddOrEditModal = useHideAddOrEditModal();
  const onCancel = () => {
    if (actionType === NoticeActionType.Edit) {
      formRef.current?.resetFields();
    }
    hideAddOrEditModal();
  };
  const actionTypeText = noticeActionTypeTextMap[actionType];

  const onFinish = async (values: SysNoticeAddBo) => {
    if (actionType === NoticeActionType.Add) {
      await sysNoticePostAdd(values);
    } else {
      await sysNoticePostEdit({ ...values, noticeId: record!.noticeId });
    }

    hideAddOrEditModal();
    formRef.current?.resetFields();

    mainTableActions?.reload();

    message.success(`${actionTypeText}成功`);
  };

  const formColumns = useFormColumns();

  useEffect(() => {
    if (open && NoticeActionType.Edit) {
      startTransition(() => {
        formRef.current?.setFieldsValue(record);
      });
    }
  }, [open]);

  return (
    <BetaSchemaForm<SysNoticeAddBo>
      title={`${actionTypeText}公告通知`}
      layoutType="ModalForm"
      grid
      colProps={{
        span: 12,
      }}
      open={open}
      modalProps={{
        onCancel,
        okText: '提交',
      }}
      columns={formColumns}
      formRef={formRef}
      width={800}
      onFinish={onFinish}
    />
  );
};

export default ModalAddOrEdit;
