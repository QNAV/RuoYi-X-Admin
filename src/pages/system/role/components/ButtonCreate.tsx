import { FDRoleSort, FRemark, FRoleKey, FRoleName, useStatusNormalDisable } from '@/columns';
import { Access } from '@/components';
import { useAtomValueAccess } from '@/models';
import { useAtomValueRoleListActions } from '@/pages/system/role/model';
import { SysRolePostAdd } from '@/services/sys/SysRoleService';
import { PlusOutlined } from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-components';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import type { FC } from 'react';
import { useRef } from 'react';

const ButtonCreate: FC = () => {
  const { canAddSysRole } = useAtomValueAccess();

  const formRef = useRef<ProFormInstance<API.SysRoleReq>>();

  const roleListActions = useAtomValueRoleListActions();

  const [, FStatusNormalDisable] = useStatusNormalDisable();

  return (
    <Access accessible={canAddSysRole}>
      <BetaSchemaForm
        title="新增角色"
        trigger={
          <Button type="primary" icon={<PlusOutlined />}>
            新增
          </Button>
        }
        formRef={formRef}
        onFinish={async (values) => {
          await SysRolePostAdd({
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
        columns={[FRoleName, FRoleKey, { valueType: 'group', columns: [FStatusNormalDisable, FDRoleSort] }, FRemark]}
      />
    </Access>
  );
};

export default ButtonCreate;
