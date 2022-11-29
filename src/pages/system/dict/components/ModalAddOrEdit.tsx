import { AccessWithState } from '@/components';
import { useQueryDictSysNormalDisable } from '@/models';
import {
  DictTypeActionType,
  dictTypeActionTypeTextMap,
  useAtomValueAddOrEditModal,
  useAtomValueMainTableActions,
  useHideAddOrEditModal,
} from '@/pages/system/dict/model';
import type { SysDictTypeAddBo } from '@/services/system/data-contracts';
import { sysDictTypePostAdd, sysDictTypePostEdit } from '@/services/system/System';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ModalForm, ProFormRadio, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { message } from 'antd';
import type { FC } from 'react';
import { startTransition, useEffect, useRef } from 'react';

const ModalAddOrEdit: FC = () => {
  const formRef = useRef<ProFormInstance>();

  const mainTableActions = useAtomValueMainTableActions();

  const { open, actionType, record } = useAtomValueAddOrEditModal();
  const hideAddOrEditModal = useHideAddOrEditModal();
  const onCancel = () => {
    if (actionType === DictTypeActionType.Edit) {
      formRef.current?.resetFields();
    }
    hideAddOrEditModal();
  };

  const onFinish = async (values: SysDictTypeAddBo) => {
    if (actionType === DictTypeActionType.Add) {
      await sysDictTypePostAdd(values);
      message.success('新增成功');
    } else {
      await sysDictTypePostEdit({ ...values, dictId: record!.dictId });
      message.success('编辑成功');
    }

    mainTableActions?.reload();

    hideAddOrEditModal();
    formRef.current?.resetFields();
  };

  const { defaultValueSysNormalDisable, valueEnumSysNormalDisable } = useQueryDictSysNormalDisable();

  useEffect(() => {
    if (open && actionType === DictTypeActionType.Edit) {
      startTransition(() => {
        formRef.current?.setFieldsValue(record);
      });
    }
  }, [open]);

  return (
    <AccessWithState accessKey={['system:dict:add', 'system:dict:edit']}>
      <ModalForm<SysDictTypeAddBo>
        formRef={formRef}
        width={500}
        title={`${dictTypeActionTypeTextMap[actionType]}字典类型`}
        open={open}
        modalProps={{
          onCancel,
          okText: '提交',
        }}
        onFinish={onFinish}
      >
        <ProFormText name="dictName" label="字典名称" rules={[{ required: true }]} />

        <ProFormText name="dictType" label="字典类型" rules={[{ required: true }]} />

        <ProFormRadio.Group
          name="status"
          label="状态"
          valueEnum={valueEnumSysNormalDisable}
          initialValue={defaultValueSysNormalDisable}
        />

        <ProFormTextArea name="remark" label="备注" />
      </ModalForm>
    </AccessWithState>
  );
};

export default ModalAddOrEdit;
