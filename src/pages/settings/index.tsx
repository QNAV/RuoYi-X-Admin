import { SexMap } from '@/constants';
import PwdForm from '@/pages/settings/components/PwdForm';
import type { UpdateUserProfileParams } from '@/services';
import { reqUpdateUserProfile, uploadAvatarPath } from '@/services';
import type { InitialState } from '@/types';
import { getToken, regEmail, regPhone } from '@/utils';
import { useModel } from '@@/plugin-model';
import { CameraOutlined } from '@ant-design/icons';
import type { ProDescriptionsItemProps, ProDescriptionsProps } from '@ant-design/pro-components';
import { ProCard, ProDescriptions } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';
import { Avatar, Col, Divider, message, Row, Upload } from 'antd';
import { useState } from 'react';

enum TabKey {
  PASSWORD = 'PASSWORD',
}

const columns: ProDescriptionsItemProps[] = [
  { dataIndex: 'userName', title: '用户名称', valueType: 'text' },
  { dataIndex: 'deptName', title: '所属部门', valueType: 'text' },
  { dataIndex: 'roleName', title: '所属角色', valueType: 'text' },
  { dataIndex: 'createTime', title: '创建时间', valueType: 'text' },
];

const editableColumns: ProDescriptionsItemProps[] = [
  { dataIndex: 'nickName', title: '用户昵称', valueType: 'text' },
  {
    dataIndex: 'phonenumber',
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

const SettingsPage = () => {
  const initialStateModel = useModel('@@initialState');
  const initialState = initialStateModel.initialState as unknown as InitialState;
  const [activeKey, setActiveKey] = useState<TabKey>(TabKey.PASSWORD);

  const { refresh } = useModel('@@initialState');

  const updateUserProfile = async (params: UpdateUserProfileParams) => {
    await reqUpdateUserProfile(params);

    await refresh();

    message.success('修改成功');
  };

  const editable: ProDescriptionsProps['editable'] = {
    onSave: async (k, record) => {
      const key = k as keyof UpdateUserProfileParams;
      await updateUserProfile({ [key]: record[key] });
    },
  };

  return (
    <PageContainer>
      <ProCard ghost direction="column" gutter={[0, 24]}>
        <ProCard direction="row">
          <Row align="middle">
            <Col span={4}>
              <div className="w-[100px] relative m-auto">
                <Avatar src={initialState.userInfo.user.avatar || 'Avatar'} size={100} />

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
                    updateUserProfile({ avatar: e.file.response.data });
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
                  userName: initialState.userInfo.user.userName,
                  createTime: initialState.userInfo.user.createTime,
                  deptName: initialState.userInfo.user.dept.deptName,
                  roleName: initialState.userInfo.user.roles.map((item) => item.roleName).join('/'),
                }}
              />

              <Divider />

              <ProDescriptions columns={editableColumns} dataSource={initialState.userInfo.user} editable={editable} />
            </Col>
          </Row>
        </ProCard>

        <ProCard tabs={{ activeKey, onChange: (e) => setActiveKey(e as TabKey) }}>
          <ProCard.TabPane key={TabKey.PASSWORD} tab="安全设置">
            <PwdForm />
          </ProCard.TabPane>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default SettingsPage;
