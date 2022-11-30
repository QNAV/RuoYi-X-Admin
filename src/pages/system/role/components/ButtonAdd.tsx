import { AccessWithState, BaseButtonAdd } from '@/components';
import { useQueryDictSysNormalDisable } from '@/models';
import { useAtomValueRoleListActions } from '@/pages/system/role/model';
import type { SysRole } from '@/services/system/data-contracts';
import { sysRolePostAdd } from '@/services/system/System';
import type { ProFormInstance } from '@ant-design/pro-components';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { message } from 'antd';
import type { FC } from 'react';
import { useRef } from 'react';

const ButtonAdd: FC = () => {
  const formRef = useRef<ProFormInstance<SysRole>>();

  const roleListActions = useAtomValueRoleListActions();

  const { defaultValueSysNormalDisable, valueEnumSysNormalDisable } = useQueryDictSysNormalDisable();

  return (
    <AccessWithState accessKey="system:role:add">
      <BetaSchemaForm
        title="新增角色"
        trigger={<BaseButtonAdd />}
        formRef={formRef}
        onFinish={async (values) => {
          await sysRolePostAdd({
            ...values,
            menuIds: [],
            menuCheckStrictly: false,
            deptCheckStrictly: false,
          });

          roleListActions?.reload();

          message.success('新增成功');

          formRef.current?.resetFields();

          return true;
        }}
        width={500}
        modalProps={{
          okText: '提交',
        }}
        layoutType="ModalForm"
        columns={[
          {
            title: '角色名称',
            dataIndex: 'roleName',
            key: 'roleName',
            valueType: 'text',
            formItemProps: {
              required: true,
              rules: [{ required: true, message: '请输入角色名称' }],
            },
          },
          {
            title: '权限字符',
            dataIndex: 'roleKey',
            key: 'roleKey',
            valueType: 'text',
            tooltip: "控制器中定义的权限字符，如：@PreAuthorize(`@ss.hasRole('admin')`)",
            formItemProps: {
              required: true,
              rules: [{ required: true, message: '请输入权限字符' }],
            },
          },
          {
            valueType: 'group',
            columns: [
              {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                valueEnum: valueEnumSysNormalDisable,
                valueType: 'radio',
                formItemProps: {
                  initialValue: defaultValueSysNormalDisable,
                  required: true,
                  rules: [{ required: true, message: '请选择状态' }],
                },
              },
              {
                title: '显示排序',
                dataIndex: 'roleSort',
                key: 'roleSort',
                valueType: 'digit',
                formItemProps: {
                  initialValue: 0,
                  required: true,
                  rules: [{ required: true, message: '请输入显示排序' }],
                },
              },
            ],
          },
          { title: '备注', dataIndex: 'remark', key: 'remark', valueType: 'textarea' },
        ]}
      />
    </AccessWithState>
  );
};

export default ButtonAdd;
