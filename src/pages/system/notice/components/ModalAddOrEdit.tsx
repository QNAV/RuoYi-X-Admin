import { Access } from '@/components';
import { WangEditor } from '@/features';
import { useQueryDict } from '@/models';
import {
  useAtomValueAddOrEditModal,
  useAtomValueMainTableActions,
  useHideAddOrEditModal,
} from '@/pages/system/notice/model';
import type { SysNoticeAddBo } from '@/services/system/data-contracts';
import { sysNoticePostAdd, sysNoticePostEdit } from '@/services/system/System';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ModalForm, ProFormItem, ProFormRadio, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import { useEffect, useRef } from 'react';

const ModalAddOrEdit = () => {
  const formRef = useRef<ProFormInstance>();

  const { data: dictSysNoticeType } = useQueryDict('sys_notice_type');
  const { data: dictSysNoticeStatus } = useQueryDict('sys_notice_status');

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
    <Access accessible>
      <ModalForm<SysNoticeAddBo>
        formRef={formRef}
        width={800}
        title={actionType === 'add' ? '新增公告' : '编辑公告'}
        open={open}
        modalProps={{
          onCancel,
          okText: '提交',
        }}
        grid
        onFinish={async (values) => {
          if (actionType === 'add') {
            await sysNoticePostAdd(values);
            message.success('新增成功');
          } else {
            await sysNoticePostEdit({ ...values, noticeId: record!.noticeId });
            message.success('编辑成功');
          }

          mainTableActions?.reload();

          hideAddOrEditModal();

          formRef.current?.resetFields();
          return true;
        }}
      >
        <ProFormText
          name="noticeTitle"
          label="公告标题"
          required
          rules={[{ required: true }]}
          colProps={{
            span: 12,
          }}
        />

        <ProFormSelect
          name="noticeType"
          label="公告类型"
          required
          rules={[{ required: true }]}
          valueEnum={dictSysNoticeType?.valueEnum ?? {}}
          colProps={{
            span: 12,
          }}
        />

        <ProFormRadio.Group
          name="status"
          label="状态"
          valueEnum={dictSysNoticeStatus?.valueEnum ?? {}}
          initialValue={dictSysNoticeStatus?.defaultValue}
        />

        <ProFormItem name="noticeContent" label="内容">
          <WangEditor />
        </ProFormItem>
      </ModalForm>
    </Access>
  );
};

export default ModalAddOrEdit;
