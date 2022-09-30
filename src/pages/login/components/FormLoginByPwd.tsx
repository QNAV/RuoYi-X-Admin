import { LockOutlined, SafetyCertificateOutlined, UserOutlined } from '@ant-design/icons';
import { ProFormGroup, ProFormText } from '@ant-design/pro-components';
import { Image, Skeleton } from 'antd';
import type { FC } from 'react';

const FormLoginByPwd: FC<{ captchaImageSrc?: string; onCaptchaImageClick: () => void }> = ({
  captchaImageSrc,
  onCaptchaImageClick,
}) => {
  return (
    <>
      <ProFormText
        name="username"
        fieldProps={{
          size: 'large',
          prefix: <UserOutlined />,
        }}
        placeholder="admin"
        initialValue="admin"
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
        ]}
      />
      <ProFormText.Password
        name="password"
        fieldProps={{
          size: 'large',
          prefix: <LockOutlined />,
        }}
        placeholder="admin123"
        initialValue="admin123"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
        ]}
      />

      <ProFormGroup>
        <ProFormText
          width={160}
          name="code"
          placeholder="请输入验证码"
          fieldProps={{
            size: 'large',
            prefix: <SafetyCertificateOutlined />,
          }}
          rules={[
            {
              required: true,
              message: '请输入验证码',
            },
          ]}
        />

        <div className="h-[40px] w-[135px] rounded-md cursor-pointer border border-solid border-gray-300">
          {captchaImageSrc ? (
            <Image
              src={`data:image/png;base64,${captchaImageSrc}`}
              preview={false}
              height={40}
              width={135}
              alt="图片验证码"
              onClick={onCaptchaImageClick}
              className="rounded-md"
            />
          ) : (
            <Skeleton.Button active block size="large" />
          )}
        </div>
      </ProFormGroup>
    </>
  );
};

export default FormLoginByPwd;
