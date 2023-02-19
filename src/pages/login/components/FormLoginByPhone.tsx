import { regPhone } from '@/utils';
import { LockOutlined, MobileOutlined } from '@ant-design/icons';
import { ProFormCaptcha, ProFormText } from '@ant-design/pro-components';
import { App } from 'antd';
import type { FC } from 'react';

const FormLoginByPhone: FC = () => {
  const { message } = App.useApp();

  return (
    <>
      <ProFormText
        fieldProps={{
          maxLength: 11,
          size: 'large',
          prefix: <MobileOutlined />,
        }}
        name="phoneNumber"
        placeholder="请输入手机号"
        rules={[
          {
            required: true,
            message: '请输入手机号',
          },
          {
            pattern: regPhone,
            message: '手机号格式错误',
          },
        ]}
      />
      <ProFormCaptcha
        fieldProps={{
          size: 'large',
          prefix: <LockOutlined />,
        }}
        captchaProps={{
          size: 'large',
        }}
        placeholder="请输入验证码"
        captchaTextRender={(timing, count) => {
          if (timing) {
            return `${count} 获取验证码`;
          }
          return '获取验证码';
        }}
        name="smsCode"
        rules={[
          {
            required: true,
            message: '请输入验证码',
          },
        ]}
        onGetCaptcha={async () => {
          message.info('敬请期待');

          return Promise.reject(new Error('敬请期待'));
        }}
      />
    </>
  );
};

export default FormLoginByPhone;
