import { EnableDisableStatus, EnableDisableStatusMap } from '@/constants';
import type { MenuTreeValue } from '@/pages/system/role/components/MenuTree';

import { useRoleListActions } from '@/pages/system/role/model';
import { SysRolePostAdd } from '@/services/sys/SysRoleService';
import { Access } from '@@/exports';
import { useAccess } from '@@/plugin-access';
import { PlusOutlined } from '@ant-design/icons';
import { ModalForm, ProFormDigit, ProFormRadio, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { Button, message } from 'antd';
import type { FC } from 'react';

interface FormData extends API.SysRoleReq {
  menuInfo?: MenuTreeValue;
}

const ButtonCreateRole: FC = () => {
  const access = useAccess();
  const tableActions = useRoleListActions();

  const { mutateAsync } = useMutation(SysRolePostAdd, {
    onSuccess: () => {
      tableActions?.reload();
      message.success('新建成功');
    },
  });

  return (
    <Access accessible={access.canAddSysRole}>
      <ModalForm<FormData>
        title="新建角色"
        trigger={
          <Button type="primary" icon={<PlusOutlined />}>
            新建
          </Button>
        }
        onFinish={async (values) => {
          const { menuInfo = { menuIds: [], menuCheckStrictly: true }, ...r } = values;

          await mutateAsync({ ...r, ...menuInfo });

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

export default ButtonCreateRole;
