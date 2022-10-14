import { Access } from '@/components';
import { EnableDisableStatus, EnableDisableStatusMap, OptionsListClass } from '@/constants';
import { useAtomValueAccess } from '@/models';
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

  const { dictType, dictName } = useAtomValueCurDictType();

  useEffect(() => {
    if (open && actionType === 'add') {
      formRef.current?.setFieldsValue({
        dictType,
        dictName,
      });
    }

    if (open && actionType === 'edit') {
      formRef.current?.setFieldsValue({ ...record, dictName });
    }

    if (!open) {
      formRef.current?.resetFields();
    }
  }, [open]);

  return (
    <Access accessible={canEditSysDict}>
      <ModalForm<API.SysDictDataAddBo>
        formRef={formRef}
        width={500}
        title={actionType === 'add' ? '新增字典数据' : '新增字典数据'}
        open={open}
        modalProps={{
          onCancel: hideAddOrEditModal,
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

        <ProFormSelect
          name="listClass"
          label="回显样式"
          fieldProps={{ options: OptionsListClass }}
          initialValue="default"
        />

        <ProFormRadio.Group
          name="status"
          label="状态"
          valueEnum={EnableDisableStatusMap}
          initialValue={EnableDisableStatus.ENABLE}
        />

        <ProFormTextArea name="remark" label="备注" />
      </ModalForm>
    </Access>
  );
};

export default ModalAddOrEdit;