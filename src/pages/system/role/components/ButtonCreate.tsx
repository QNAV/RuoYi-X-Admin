import { EnableDisableStatus, EnableDisableStatusMap } from '@/constants';
import { useRoleListActions } from '@/pages/system/role/model';
import { SysRolePostAdd } from '@/services/sys/SysRoleService';
import { Access } from '@@/exports';
import { useAccess } from '@@/plugin-access';
import { PlusOutlined } from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ModalForm, ProFormDigit, ProFormRadio, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import type { FC } from 'react';
import { useRef } from 'react';

const ButtonCreate: FC = () => {
  const access = useAccess();

  const formRef = useRef<ProFormInstance<API.SysRoleReq>>();

  const roleListActions = useRoleListActions();

  return (
    <Access accessible={access.canAddSysRole}>
      <ModalForm<API.SysRoleReq>
        title="新建角色"
        trigger={
          <Button type="primary" icon={<PlusOutlined />}>
            新建
          </Button>
        }
        formRef={formRef}
        onFinish={async (values) => {
          await SysRolePostAdd({ ...values, menuIds: [], menuCheckStrictly: true });

          roleListActions?.reload();

          formRef.current?.resetFields();

          message.success('新建成功');

          return true;
        }}
        width={500}
      >
        <ProFormText name="roleName" label="角色名称" rules={[{ required: true }]} />

        <ProFormText
          name="roleKey"
          label="权限字符"
          rules={[{ required: true }]}
          tooltip={"控制器中定义的权限字符，如：@PreAuthorize(`@ss.hasRole('admin')`)"}
        />

        <ProFormDigit name="roleSort" label="显示排序" rules={[{ required: true }]} initialValue={0} />

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

export default ButtonCreate;
