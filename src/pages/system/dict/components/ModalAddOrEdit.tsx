import { Access } from '@/components';
import { useQueryDict } from '@/models';
import {
  useAtomValueAddOrEditModal,
  useAtomValueMainTableActions,
  useHideAddOrEditModal,
} from '@/pages/system/dict/model';
import type { SysDictTypeAddBo } from '@/services/system/data-contracts';
import { sysDictTypePostAdd, sysDictTypePostEdit } from '@/services/system/System';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ModalForm, ProFormRadio, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { message } from 'antd';
import { useEffect, useRef } from 'react';

const ModalAddOrEdit = () => {
  const formRef = useRef<ProFormInstance>();

  const mainTableActions = useAtomValueMainTableActions();

  const { open, actionType, record } = useAtomValueAddOrEditModal();
  const hideAddOrEditModal = useHideAddOrEditModal();
  const onCancel = () => {
    if (actionType === 'edit') {
      formRef.current?.resetFields();
    }
    hideAddOrEditModal();
  };

  const { data } = useQueryDict('sys_normal_disable');

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
      <ModalForm<SysDictTypeAddBo>
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
            await sysDictTypePostAdd(values);
            message.success('新增成功');
          } else {
            await sysDictTypePostEdit({ ...values, dictId: record!.dictId });
            message.success('编辑成功');
          }

          mainTableActions?.reload();

          hideAddOrEditModal();
          formRef.current?.resetFields();
        }}
      >
        <ProFormText name="dictName" label="字典名称" required rules={[{ required: true }]} />

        <ProFormText name="dictType" label="字典类型" required rules={[{ required: true }]} />

        <ProFormRadio.Group
          name="status"
          label="状态"
          valueEnum={data?.mapData ?? {}}
          initialValue={data?.defaultValue}
        />

        <ProFormTextArea name="remark" label="备注" />
      </ModalForm>
    </Access>
  );
};

export default ModalAddOrEdit;
