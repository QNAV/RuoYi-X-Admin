import { AccessWithState, WangEditor } from '@/features';
import { useQueryDictSysNoticeStatus, useQueryDictSysNoticeType } from '@/models';
import {
  NoticeActionType,
  noticeActionTypeTextMap,
  useAtomValueAddOrEditModal,
  useAtomValueMainTableActions,
  useHideAddOrEditModal,
} from '@/pages/system/notice/model';
import type { SysNoticeAddBo } from '@/services/system/data-contracts';
import { sysNoticePostAdd, sysNoticePostEdit } from '@/services/system/System';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ModalForm, ProFormItem, ProFormRadio, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import { startTransition, useEffect, useRef } from 'react';

const ModalAddOrEdit = () => {
  const formRef = useRef<ProFormInstance>();

  const { defaultValueSysNoticeType, valueEnumSysNoticeType } = useQueryDictSysNoticeType();
  const { defaultValueSysNoticeStatus, valueEnumSysNoticeStatus } = useQueryDictSysNoticeStatus();

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

  useEffect(() => {
    if (open && NoticeActionType.Edit) {
      startTransition(() => {
        formRef.current?.setFieldsValue(record);
      });
    }
  }, [open]);

  return (
    <AccessWithState accessKey={['system:notice:add', 'system:notice:edit']}>
      <ModalForm<SysNoticeAddBo>
        formRef={formRef}
        width={800}
        title={`${actionTypeText}公告通知`}
        open={open}
        modalProps={{
          onCancel,
          okText: '提交',
        }}
        grid
        onFinish={onFinish}
      >
        <ProFormText
          name="noticeTitle"
          label="公告标题"
          rules={[{ required: true }]}
          colProps={{
            span: 12,
          }}
        />

        <ProFormSelect
          name="noticeType"
          label="公告类型"
          rules={[{ required: true }]}
          valueEnum={valueEnumSysNoticeType}
          initialValue={defaultValueSysNoticeType}
          colProps={{
            span: 12,
          }}
        />

        <ProFormRadio.Group
          name="status"
          label="状态"
          valueEnum={valueEnumSysNoticeStatus}
          initialValue={defaultValueSysNoticeStatus}
        />

        <ProFormItem name="noticeContent" label="内容">
          <WangEditor />
        </ProFormItem>
      </ModalForm>
    </AccessWithState>
  );
};

export default ModalAddOrEdit;
