import { Access } from '@/components';
import { useQueryDict } from '@/models';
import { useAtomValueRoleListActions } from '@/pages/system/role/model';
import type { SysRole } from '@/services/system/data-contracts';
import { sysRolePostAdd } from '@/services/system/System';
import { PlusOutlined } from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-components';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import type { FC } from 'react';
import { useRef } from 'react';

const ButtonCreate: FC = () => {
  const formRef = useRef<ProFormInstance<SysRole>>();

  const roleListActions = useAtomValueRoleListActions();

  const { data } = useQueryDict('sys_normal_disable');

  return (
    <Access accessible>
      <BetaSchemaForm
        title="新增角色"
        trigger={
          <Button type="primary" icon={<PlusOutlined />}>
            新增
          </Button>
        }
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
                valueEnum: data?.valueEnum ?? {},
                valueType: 'radio',
                formItemProps: {
                  initialValue: data?.defaultValue,
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
                  required: true,
                  rules: [{ required: true, message: '请输入显示排序' }],
                },
              },
            ],
          },
          { title: '备注', dataIndex: 'remark', key: 'remark', valueType: 'textarea' },
        ]}
      />
    </Access>
  );
};

export default ButtonCreate;
