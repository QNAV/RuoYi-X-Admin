import { AccessWithState, BaseButtonAdd } from '@/components';
import { useQueryDictSysNormalDisable } from '@/models';
import { useAtomValueRoleListActions } from '@/pages/system/role/model';
import type { SysRole } from '@/services/system/data-contracts';
import { sysRolePostAdd } from '@/services/system/System';
import type { ProFormColumnsType, ProFormInstance } from '@ant-design/pro-components';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { message } from 'antd';
import type { FC } from 'react';
import { useRef } from 'react';

const useColumns = (): ProFormColumnsType<SysRole>[] => {
  const { defaultValueSysNormalDisable, valueEnumSysNormalDisable } = useQueryDictSysNormalDisable();

  return [
    {
      title: '角色名称',
      dataIndex: 'roleName',
      key: 'roleName',
      valueType: 'text',
      formItemProps: {
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
            rules: [{ required: true, message: '请输入显示排序' }],
          },
        },
      ],
    },
    { title: '备注', dataIndex: 'remark', key: 'remark', valueType: 'textarea' },
  ];
};

const ButtonAdd: FC = () => {
  const formRef = useRef<ProFormInstance<SysRole>>();

  const roleListActions = useAtomValueRoleListActions();

  const columns = useColumns();

  const onFinish = async (values: SysRole) => {
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
  };

  return (
    <AccessWithState accessKey="system:role:add">
      <BetaSchemaForm<SysRole>
        title="新增角色"
        trigger={<BaseButtonAdd />}
        formRef={formRef}
        onFinish={onFinish}
        width={500}
        modalProps={{
          okText: '提交',
        }}
        layoutType="ModalForm"
        columns={columns}
      />
    </AccessWithState>
  );
};

export default ButtonAdd;
