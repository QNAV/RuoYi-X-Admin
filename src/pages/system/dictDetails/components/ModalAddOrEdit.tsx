import { Access } from '@/components';
import { ListClassMap } from '@/constants';
import { useAtomValueAccess, useQueryDict } from '@/models';
import {
  useAtomValueAddOrEditModal,
  useAtomValueCurDictType,
  useAtomValueMainTableActions,
  useHideAddOrEditModal,
} from '@/pages/system/dictDetails/model';
import { SysDictDataPostAdd, SysDictDataPostEdit } from '@/services/sys/SysDictDataService';
import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ModalForm,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { message } from 'antd';
import { useEffect, useRef } from 'react';

const ModalAddOrEdit = () => {
  const formRef = useRef<ProFormInstance>();

  const { canEditSysDict } = useAtomValueAccess();

  const mainTableActions = useAtomValueMainTableActions();

  const { open, actionType, record } = useAtomValueAddOrEditModal();
  const hideAddOrEditModal = useHideAddOrEditModal();
  const onCancel = () => {
    if (actionType === 'edit') {
      formRef.current?.resetFields();
    }
    hideAddOrEditModal();
  };

  const { dictType, dictName } = useAtomValueCurDictType();

  const { data } = useQueryDict('sys_normal_disable');

  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      if (actionType === 'add') {
        formRef.current?.setFieldsValue({ dictType, dictName });
      } else {
        formRef.current?.setFieldsValue({ ...record, dictName });
      }
      clearTimeout(timer);
    }, 0);
  }, [open]);

  return (
    <Access accessible={canEditSysDict}>
      <ModalForm<API.SysDictDataAddBo>
        formRef={formRef}
        width={500}
        title={actionType === 'add' ? '新增字典数据' : '新增字典数据'}
        open={open}
        modalProps={{
          onCancel,
          okText: '提交',
        }}
        onFinish={async (values) => {
          if (actionType === 'add') {
            await SysDictDataPostAdd(values);
            message.success('新增成功');
          } else {
            await SysDictDataPostEdit({ ...values, dictCode: record!.dictCode });
            message.success('编辑成功');
          }

          mainTableActions?.reload();

          hideAddOrEditModal();
          formRef.current?.resetFields();
        }}
      >
        <ProFormText name="dictName" label="字典名称" readonly />

        <ProFormText name="dictType" label="字典类型" hidden />

        <ProFormText name="dictLabel" label="数据标签" rules={[{ required: true }]} />

        <ProFormText name="dictValue" label="数据键值" rules={[{ required: true }]} />

        <ProFormText name="cssClass" label="样式属性" />

        <ProFormDigit name="dictSort" label="显示排序" initialValue={0} />

        <ProFormSelect name="listClass" label="回显样式" valueEnum={ListClassMap} initialValue="default" />

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
