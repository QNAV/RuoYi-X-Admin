import { EnableDisableStatus, EnableDisableStatusMap, ModalBodyStyle } from '@/constants';
import type { MenuTreeValue } from '@/pages/system/role/components/MenuTree';
import MenuTree from '@/pages/system/role/components/MenuTree';

import { tableActionsAtom } from '@/pages/system/role/model';
import { SysRolePostAdd } from '@/services/sys/SysRoleService';
import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProFormDigit,
  ProFormItem,
  ProFormRadio,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { Button, message } from 'antd';
import type { FC } from 'react';
import { useRecoilValue } from 'recoil';

interface FormData extends API.SysRoleReq {
  menuInfo?: MenuTreeValue;
}

const ButtonCreate: FC = () => {
  const tableActions = useRecoilValue(tableActionsAtom);

  const { mutateAsync } = useMutation(SysRolePostAdd, {
    onSuccess: () => {
      tableActions?.reload();
      message.success('新建成功');
    },
  });

  return (
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
      modalProps={{
        bodyStyle: ModalBodyStyle,
      }}
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

      <ProFormItem name="menuInfo" label="菜单权限">
        <MenuTree />
      </ProFormItem>
    </ModalForm>
  );
};

export default ButtonCreate;
