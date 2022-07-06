import { EnableDisableStatus, MapEnableDisableStatus } from '@/constants';
import MenuTree from '@/pages/system/role/components/MenuTree';

import { tableActionsAtom } from '@/pages/system/role/model';
import { SysRolePostAdd } from '@/services/sys/SysRoleService';
import { PlusOutlined } from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-components';
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
import { useRef } from 'react';
import { useMutation } from 'react-query';
import { useRecoilValue } from 'recoil';

const ButtonCreate: FC = () => {
  const formRef = useRef<ProFormInstance>();
  const tableActions = useRecoilValue(tableActionsAtom);

  const { mutateAsync } = useMutation(SysRolePostAdd, {
    onSuccess: () => {
      tableActions?.reload();
      message.success('新建成功');
    },
  });

  return (
    <ModalForm<API.SysRoleReq>
      title="新建角色"
      trigger={
        <Button type="primary" icon={<PlusOutlined />}>
          新建
        </Button>
      }
      onFinish={async (values) => {
        await mutateAsync(values);
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
        valueEnum={MapEnableDisableStatus}
        initialValue={EnableDisableStatus.ENABLE}
      />

      <ProFormItem label="菜单权限">
        <MenuTree
          onChange={(e) => {
            formRef?.current?.setFieldsValue({ menuIds: e });
          }}
        />
      </ProFormItem>

      <ProFormTextArea name="remark" label="备注" />
    </ModalForm>
  );
};

export default ButtonCreate;
