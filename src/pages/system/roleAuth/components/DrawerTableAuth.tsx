import { TCreateTime, TEmail, TNickName, TPhoneNumber, TUserName, useStatusNormalDisable } from '@/columns';
import { BaseProTable } from '@/components';
import { useActionsMainTable } from '@/pages/system/roleAuth/model';
import { SysRolePostUnallocatedList, SysUserPostSelectAuthUserAll } from '@/services/sys/SysRoleService';
import { convertParams } from '@/utils';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { useBoolean } from 'ahooks';
import { Button, Drawer, message } from 'antd';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const DrawerTableAuth: FC = () => {
  const params = useParams<{ roleId: string }>();
  const roleId = Number(params.roleId);

  const [open, { toggle }] = useBoolean();

  const [TStatusNormalDisable] = useStatusNormalDisable();

  const actionRef = useRef<ActionType>();

  const [selectedKeys, setSelectedKeys] = useState<number[]>([]);

  const actionsMainTable = useActionsMainTable();

  const { isLoading, mutate } = useMutation(() => SysUserPostSelectAuthUserAll({ roleId, userIds: selectedKeys }), {
    onSuccess: () => {
      actionRef.current?.reload();
      actionRef.current?.clearSelected?.();
      actionsMainTable?.reload();
      toggle();
      message.success('授权成功');
    },
  });

  return (
    <>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => {
          actionRef.current?.reload();
          toggle();
        }}
      >
        授权用户
      </Button>

      <Drawer
        open={open}
        title="授权用户"
        placement="left"
        onClose={toggle}
        width={850}
        footer={
          <Button type="primary" disabled={selectedKeys.length === 0} loading={isLoading} onClick={() => mutate()}>
            提交
          </Button>
        }
        footerStyle={{
          textAlign: 'right',
        }}
      >
        <BaseProTable
          ghost
          rowKey="userId"
          actionRef={actionRef}
          columns={[TUserName, TNickName, TEmail, TPhoneNumber, TStatusNormalDisable, TCreateTime]}
          tableAlertRender={false}
          rowSelection={{
            onChange: (_) => {
              setSelectedKeys(_ as number[]);
            },
          }}
          request={(...p) => SysRolePostUnallocatedList(convertParams(...p))}
        />
      </Drawer>
    </>
  );
};

export default DrawerTableAuth;
