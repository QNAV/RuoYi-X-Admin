import { BaseProTable } from '@/components';
import { useQueryDict } from '@/models';
import { useActionsMainTable } from '@/pages/system/roleAuth/model';
import { sysRolePostUnallocatedList, sysUserPostSelectAuthUserAll } from '@/services/system/System';
import { convertParams, regEmail } from '@/utils';
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

  const actionRef = useRef<ActionType>();

  const [selectedKeys, setSelectedKeys] = useState<number[]>([]);

  const actionsMainTable = useActionsMainTable();

  const { isLoading, mutate } = useMutation(() => sysUserPostSelectAuthUserAll({ roleId, userIds: selectedKeys }), {
    onSuccess: () => {
      actionRef.current?.reload();
      actionRef.current?.clearSelected?.();
      actionsMainTable?.reload();
      toggle();
      message.success('授权成功');
    },
  });
  const { data: dictSysCommonStatus } = useQueryDict('sys_common_status');

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
          columns={[
            { dataIndex: 'userName', key: 'userName', title: '用户名称', valueType: 'text' },
            { dataIndex: 'nickName', key: 'nickName', title: '用户昵称', valueType: 'text', hideInSearch: true },
            {
              dataIndex: 'email',
              title: '邮箱',
              valueType: 'text',
              hideInSearch: true,
              formItemProps: {
                rules: [
                  {
                    required: true,
                    message: '请输入邮箱',
                  },
                  {
                    pattern: regEmail,
                    message: '邮箱格式错误',
                  },
                ],
              },
            },
            { dataIndex: 'phoneNumber', key: 'phoneNumber', title: '手机号码', valueType: 'text', copyable: true },
            {
              title: '状态',
              dataIndex: 'status',
              key: 'status',
              valueType: 'select',
              valueEnum: dictSysCommonStatus?.valueEnum ?? {},
              formItemProps: {
                initialValue: dictSysCommonStatus?.defaultValue,
                required: true,
                rules: [{ required: true, message: '请选择状态' }],
              },
            },
            {
              title: '创建时间',
              dataIndex: 'createTime',
              key: 'createTime',
              valueType: 'dateTime',
              editable: false,
              hideInSearch: true,
              sorter: true,
            },
          ]}
          tableAlertRender={false}
          rowSelection={{
            onChange: (_) => {
              setSelectedKeys(_ as number[]);
            },
          }}
          request={(...p) => sysRolePostUnallocatedList(convertParams(...p))}
        />
      </Drawer>
    </>
  );
};

export default DrawerTableAuth;
