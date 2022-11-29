import { Access } from '@/components';
import { ListClassMap } from '@/constants';
import { useQueryDictSysNormalDisable } from '@/models';
import {
  DictDetailsActionType,
  dictDetailsActionTypeMap,
  useAtomValueAddOrEditModal,
  useAtomValueCurDictType,
  useAtomValueMainTableActions,
  useHideAddOrEditModal,
} from '@/pages/system/dictDetails/model';
import type { SysDictDataAddBo } from '@/services/system/data-contracts';
import { sysDictDataPostAdd, sysDictDataPostEdit } from '@/services/system/System';
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
import type { FC } from 'react';
import { startTransition, useEffect, useRef } from 'react';

const ModalAddOrEdit: FC = () => {
  const formRef = useRef<ProFormInstance>();

  const mainTableActions = useAtomValueMainTableActions();

  const { open, actionType, record } = useAtomValueAddOrEditModal();
  const hideAddOrEditModal = useHideAddOrEditModal();
  const onCancel = () => {
    if (actionType === DictDetailsActionType.Edit) {
      formRef.current?.resetFields();
    }
    hideAddOrEditModal();
  };
  const actionText = dictDetailsActionTypeMap[actionType];

  const { dictType, dictName } = useAtomValueCurDictType();

  const { defaultValueSysNormalDisable, valueEnumSysNormalDisable } = useQueryDictSysNormalDisable();

  const onFinish = async (values: SysDictDataAddBo) => {
    if (actionType === DictDetailsActionType.Add) {
      await sysDictDataPostAdd(values);
    } else {
      await sysDictDataPostEdit({ ...values, dictCode: record!.dictCode });
    }

    hideAddOrEditModal();
    formRef.current?.resetFields();

    message.success(`${actionText}成功`);

    mainTableActions?.reload();
  };

  useEffect(() => {
    if (!open) return;

    startTransition(() => {
      if (actionType === DictDetailsActionType.Add) {
        formRef.current?.setFieldsValue({ dictType, dictName });
      } else {
        formRef.current?.setFieldsValue({ ...record, dictName });
      }
    });
  }, [open]);

  return (
    <Access accessible>
      <ModalForm<SysDictDataAddBo>
        formRef={formRef}
        width={500}
        title={`${actionText}字典数据`}
        open={open}
        modalProps={{
          onCancel,
          okText: '提交',
        }}
        onFinish={onFinish}
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
          valueEnum={valueEnumSysNormalDisable}
          initialValue={defaultValueSysNormalDisable}
        />

        <ProFormTextArea name="remark" label="备注" />
      </ModalForm>
    </Access>
  );
};

export default ModalAddOrEdit;
