import { useQueryDictSysUserSex, useQueryInitialState } from '@/models';
import type { LoginUserUpdateBo } from '@/services/system/data-contracts';
import { sysProfilePostUpdateProfile } from '@/services/system/System';
import { getToken, regEmail, regPhone } from '@/utils';
import { CameraOutlined } from '@ant-design/icons';
import type { ProDescriptionsItemProps, RowEditableConfig } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { App, Avatar, Col, Divider, Row, Upload } from 'antd';
import type { FC } from 'react';

const uploadAvatarPath = `${import.meta.env.VITE_API_HOST}/api/sys/profile/update-avatar`;

const columns: ProDescriptionsItemProps[] = [
  { dataIndex: 'userName', key: 'userName', title: '用户名称', valueType: 'text' },
  { dataIndex: 'deptName', key: 'deptName', title: '所属部门', valueType: 'text' },
  { dataIndex: 'roleName', key: 'roleName', title: '所属角色', valueType: 'text' },
  { dataIndex: 'createTime', key: 'createTime', title: '创建时间', valueType: 'text' },
];

const useEditableColumns = (): ProDescriptionsItemProps[] => {
  const { valueEnumSysUserSex } = useQueryDictSysUserSex();

  return [
    {
      dataIndex: 'nickName',
      key: 'nickName',
      title: '用户昵称',
      valueType: 'text',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请输入用户昵称',
          },
        ],
      },
    },
    {
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      title: '手机号码',
      valueType: 'text',
      fieldProps: { maxLength: 11 },
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请输入手机号',
          },
          {
            pattern: regPhone,
            message: '手机号格式错误',
          },
        ],
      },
    },
    {
      dataIndex: 'email',
      key: 'email',
      title: '邮箱',
      valueType: 'text',
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
    {
      dataIndex: 'sex',
      key: 'sex',
      title: '性别',
      valueType: 'radio',
      valueEnum: valueEnumSysUserSex,
    },
  ];
};

const DescriptionsUser: FC = () => {
  const { data: initialState, refetch } = useQueryInitialState();

  const editableColumns = useEditableColumns();

  const { message } = App.useApp();

  const { mutate, mutateAsync } = useMutation(sysProfilePostUpdateProfile, {
    onSuccess: () => {
      refetch();

      message.success('保存成功');
    },
  });

  const editable: RowEditableConfig<LoginUserUpdateBo> = {
    onSave: async (key, record) => {
      await mutateAsync({
        [key as keyof LoginUserUpdateBo]: record[key as keyof LoginUserUpdateBo],
      });
    },
  };

  return (
    <Row align="middle">
      <Col span={4}>
        <div className="w-[100px] relative m-auto">
          <Avatar src={initialState?.userInfo?.user?.avatar ?? 'Avatar'} size={100} />

          <Upload
            maxCount={1}
            showUploadList={false}
            name="avatarfile"
            accept="image/jpeg,image/png"
            action={uploadAvatarPath}
            headers={{
              Authorization: getToken(),
            }}
            onChange={(e) => {
              if (e.file.status !== 'done') return;

              const { code, msg } = e.file.response;

              if (code !== 200) {
                message.error(msg);
                return;
              }

              // TODO: 测试上传头像
              mutate({ avatar: e.file.response.data });
            }}
          >
            <Avatar icon={<CameraOutlined />} className="absolute bottom-0 right-0 bg-blue-500 cursor-pointer" />
          </Upload>
        </div>
      </Col>

      <Col span={20}>
        <ProDescriptions
          columns={columns}
          dataSource={{
            userName: initialState?.userInfo.user.userName,
            createTime: initialState?.userInfo.user.createTime,
            deptName: initialState?.userInfo.user.dept.deptName,
            roleName: initialState?.userInfo.user.roles.map((item) => item.roleName).join('/'),
          }}
        />

        <Divider />

        <ProDescriptions columns={editableColumns} dataSource={initialState?.userInfo.user} editable={editable} />
      </Col>
    </Row>
  );
};

export default DescriptionsUser;
