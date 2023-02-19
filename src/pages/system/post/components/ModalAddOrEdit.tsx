import { useQueryDictSysNormalDisable } from '@/models';
import { useAtomValueMainTableActions, useHideAddOrEditModal, useValueAddOrEditModal } from '@/pages/system/post/model';
import type { SysPostAddBo } from '@/services/system/data-contracts';
import { sysPostPostAdd, sysPostPostEdit } from '@/services/system/System';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ProForm, ProFormDigit, ProFormRadio, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { App, Modal } from 'antd';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';

const ModalAddOrEdit: FC = () => {
  const formRef = useRef<ProFormInstance<SysPostAddBo>>();

  const { message } = App.useApp();

  const { open, actionType, record } = useValueAddOrEditModal();
  const hideAddOrEditModal = useHideAddOrEditModal();
  const onCancel = () => {
    if (actionType === 'edit') {
      formRef.current?.resetFields();
    }
    hideAddOrEditModal();
  };

  const mainTableActions = useAtomValueMainTableActions();

  const { valueEnumSysNormalDisable, defaultValueSysNormalDisable } = useQueryDictSysNormalDisable();

  const { mutate, isLoading } = useMutation(
    async () => {
      const values = await formRef.current?.validateFields();

      if (!values) return;

      if (actionType === 'add') {
        await sysPostPostAdd(values);
        return;
      }

      await sysPostPostEdit({
        ...values,
        postId: record!.postId,
      });
    },
    {
      onSuccess: () => {
        mainTableActions?.reload();
        onCancel();
        message.success(actionType === 'add' ? '新增成功' : '保存成功');
      },
    },
  );

  useEffect(() => {
    if (open && actionType === 'edit') {
      const timer = setTimeout(() => {
        formRef.current?.setFieldsValue(record!);
        clearTimeout(timer);
      }, 0);
    }
  }, [open]);

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      okText="提交"
      okButtonProps={{
        loading: isLoading,
      }}
      onOk={() => mutate()}
      title={actionType === 'add' ? '新增岗位' : '编辑岗位信息'}
    >
      <ProForm<SysPostAddBo> submitter={false} formRef={formRef}>
        <ProFormText name="postName" label="岗位名称" rules={[{ required: true }]} />

        <ProFormText name="postCode" label="岗位编码" rules={[{ required: true }]} />

        <ProFormDigit name="postSort" label="显示顺序" rules={[{ required: true }]} initialValue={0} />

        <ProFormRadio.Group
          name="status"
          label="状态"
          valueEnum={valueEnumSysNormalDisable}
          initialValue={defaultValueSysNormalDisable}
        />

        <ProFormTextArea name="remark" label="备注" />
      </ProForm>
    </Modal>
  );
};

export default ModalAddOrEdit;
