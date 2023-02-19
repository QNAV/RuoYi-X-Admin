import { BaseButtonAdd } from '@/components';
import { AccessWithState } from '@/features';
import { useAtomValueRoleListActions } from '@/pages/system/role/model';
import { useFormColumns } from '@/pages/system/role/model/columns';
import type { SysRole } from '@/services/system/data-contracts';
import { sysRolePostAdd } from '@/services/system/System';
import type { ProFormInstance } from '@ant-design/pro-components';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { App } from 'antd';
import type { FC } from 'react';
import { useRef } from 'react';

const ButtonAdd: FC = () => {
  const formRef = useRef<ProFormInstance<SysRole>>();

  const roleListActions = useAtomValueRoleListActions();

  const formColumns = useFormColumns();

  const { message } = App.useApp();

  const handleFinish = async (values: SysRole) => {
    await sysRolePostAdd({
      ...values,
      menuIds: [],
      menuCheckStrictly: 'NO',
      deptCheckStrictly: 'NO',
    });

    roleListActions?.reload();
    formRef.current?.resetFields();

    message.success('新增成功');

    return true;
  };

  return (
    <AccessWithState accessKey="system:role:add">
      <BetaSchemaForm<SysRole>
        title="新增角色"
        trigger={<BaseButtonAdd />}
        formRef={formRef}
        onFinish={handleFinish}
        width={500}
        modalProps={{
          okText: '提交',
        }}
        grid
        colProps={{
          span: 24,
        }}
        layoutType="ModalForm"
        columns={formColumns}
      />
    </AccessWithState>
  );
};

export default ButtonAdd;
