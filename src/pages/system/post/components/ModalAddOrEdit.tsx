import { EnableDisableStatus, EnableDisableStatusMap } from '@/constants';
import { useAtomAddOrEditModalState, useHideAddOrEditModal, useMainTableActions } from '@/pages/system/post/model';
import { SysPostPostAdd, SysPostPostEdit } from '@/services/sys/SysPostService';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ProForm, ProFormDigit, ProFormRadio, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { message, Modal } from 'antd';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';

const ModalAddOrEdit: FC = () => {
  const formRef = useRef<ProFormInstance<API.SysPostAddBo>>();

  const { open, actionType, record } = useAtomAddOrEditModalState();
  const hideAddOrEditModal = useHideAddOrEditModal();

  const mainTableActions = useMainTableActions();

  const onCancel = () => {
    hideAddOrEditModal();
    formRef.current?.resetFields();
  };

  const { mutate, isLoading } = useMutation(
    async () => {
      const values = await formRef.current?.validateFields();

      if (!values) return;

      if (actionType === 'add') {
        await SysPostPostAdd(values);
        return;
      }

      await SysPostPostEdit({
        ...values,
        postId: record!.postId,
      });
    },
    {
      onSuccess: () => {
        mainTableActions?.reload();
        onCancel();
        message.success(actionType === 'add' ? '新建成功' : '保存成功');
      },
    },
  );

  useEffect(() => {
    if (actionType === 'edit' && record && formRef.current?.setFieldsValue) {
      formRef.current.setFieldsValue(record);
    }
  }, [actionType, formRef.current?.setFieldsValue]);

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      okText="提交"
      okButtonProps={{
        loading: isLoading,
      }}
      onOk={() => mutate()}
      title={actionType === 'add' ? '新建岗位' : '编辑岗位信息'}
    >
      <ProForm<API.SysPostAddBo> submitter={false} formRef={formRef}>
        <ProFormText name="postName" label="岗位名称" rules={[{ required: true }]} />

        <ProFormText name="postCode" label="岗位编码" rules={[{ required: true }]} />

        <ProFormDigit name="postSort" label="显示顺序" rules={[{ required: true }]} initialValue={0} />

        <ProFormRadio.Group
          name="status"
          label="状态"
          valueEnum={EnableDisableStatusMap}
          initialValue={EnableDisableStatus.ENABLE}
        />

        <ProFormTextArea name="remark" label="备注" />
      </ProForm>
    </Modal>
  );
};

export default ModalAddOrEdit;
