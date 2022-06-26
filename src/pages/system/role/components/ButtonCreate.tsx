import { EnableDisableStatus, MapEnableDisableStatus } from '@/constants';
import MenuTree from '@/pages/system/role/components/MenuTree';
import type { CreateRoleParams } from '@/services';
import { reqCreateRole } from '@/services';
import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProFormDigit,
  ProFormItem,
  ProFormRadio,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { Button, message } from 'antd';
import type { FC } from 'react';
import { useMutation } from 'react-query';

const ButtonCreate: FC<{ reloadTable: () => void }> = ({ reloadTable }) => {
  const { mutateAsync } = useMutation(reqCreateRole, {
    onSuccess: () => {
      reloadTable();
      message.success('新建成功');
    },
  });

  return (
    <ModalForm<CreateRoleParams>
      title="新建角色"
      trigger={
        <Button type="primary" icon={<PlusOutlined />}>
          新建
        </Button>
      }
      onFinish={async (values) => {
        await mutateAsync(values);
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

      <ProFormDigit name="roleSort" label="角色排序" rules={[{ required: true }]} initialValue={0} />

      <ProFormRadio.Group
        name="status"
        label="状态"
        valueEnum={MapEnableDisableStatus}
        initialValue={EnableDisableStatus.ENABLE}
      />

      <ProFormItem label="菜单权限">
        <MenuTree />
      </ProFormItem>

      <ProFormTextArea name="remark" label="备注" />
    </ModalForm>
  );
};

export default ButtonCreate;
