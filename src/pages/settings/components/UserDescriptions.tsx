import { SexMap } from '@/constants';
import { useInitialState } from '@/models';
import { SysProfilePostUpdateProfile } from '@/services/sys/SysProfileService';
import { getToken, regEmail, regPhone } from '@/utils';
import { CameraOutlined } from '@ant-design/icons';
import type { ProDescriptionsItemProps, ProDescriptionsProps } from '@ant-design/pro-components';
import { ProDescriptions } from '@ant-design/pro-components';
import { useMutation } from '@tanstack/react-query';
import { Avatar, Col, Divider, message, Row, Upload } from 'antd';
import type { FC } from 'react';

const uploadAvatarPath = `${import.meta.env.VITE_API_HOST}/api/sys/profile/update-avatar`;

const columns: ProDescriptionsItemProps[] = [
  { dataIndex: 'userName', title: '用户名称', valueType: 'text' },
  { dataIndex: 'deptName', title: '所属部门', valueType: 'text' },
  { dataIndex: 'roleName', title: '所属角色', valueType: 'text' },
  { dataIndex: 'createTime', title: '创建时间', valueType: 'text' },
];

const editableColumns: ProDescriptionsItemProps[] = [
  { dataIndex: 'nickName', title: '用户昵称', valueType: 'text' },
  {
    dataIndex: 'phoneNumber',
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
    title: '性别',
    valueType: 'radio',
    valueEnum: SexMap,
  },
];

const UserDescriptions: FC = () => {
  const { data: initialState, refetch } = useInitialState();

  const updateUserProfile = useMutation(async (params: API.LoginUserUpdateBo) => {
    await SysProfilePostUpdateProfile(params);

    await refetch();

    message.success('修改成功');
  });

  const editable: ProDescriptionsProps['editable'] = {
    onSave: async (key, record) => {
      await updateUserProfile.mutateAsync({
        [key as keyof API.LoginUserUpdateBo]: record[key as keyof API.LoginUserUpdateBo],
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

              // TODO 测试上传头像
              updateUserProfile.mutate({ avatar: e.file.response.data });
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

export default UserDescriptions;
