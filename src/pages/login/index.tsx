import Actions from '@/pages/login/components/Actions';
import { CaptchaGetGetCode } from '@/services/sys/CaptchaService';
import { SysLoginPostLogin, SysLoginPostSmsLogin } from '@/services/sys/SysLoginService';
import { regPhone, setToken, StorageType } from '@/utils';
import { LockOutlined, MobileOutlined, SafetyCertificateOutlined, UserOutlined } from '@ant-design/icons';
import { LoginFormPage, ProFormCaptcha, ProFormCheckbox, ProFormGroup, ProFormText } from '@ant-design/pro-components';
import { useSearchParams } from '@umijs/max';
import { useRequest } from 'ahooks';
import { Image, message, Skeleton, Tabs } from 'antd';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

interface FormData extends API.UserNameLoginBo, API.SmsLoginBo {
  autoLogin: boolean;
}

enum LoginType {
  MOBILE = 'MOBILE',
  USERNAME = 'USERNAME',
}

const items = [
  {
    label: '账号密码登录',
    key: LoginType.USERNAME,
  },
  {
    label: '手机号登录',
    key: LoginType.MOBILE,
  },
];

const LoginPage: FC = () => {
  const [loginType, setLoginType] = useState<LoginType>(LoginType.USERNAME);

  const [searchParams, setSearchParams] = useSearchParams();
  const msg = searchParams.get('msg');
  const redirect = searchParams.get('redirect') || '/';

  const { data: getCaptchaImageRes, run: getCaptchaImage } = useRequest(CaptchaGetGetCode);

  const handleLoginSuccess = async (autoLogin: boolean, token: string) => {
    setToken(autoLogin ? StorageType.LOCAL_STORAGE : StorageType.SESSION_STORAGE, `Bearer ${token}`);

    window.location.href = redirect;
  };

  const loginBySms = async (autoLogin: boolean, data: API.SmsLoginBo) => {
    const { token } = await SysLoginPostSmsLogin(data);

    await handleLoginSuccess(autoLogin, token);
  };

  const loginByUsername = async (autoLogin: boolean, data: API.UserNameLoginBo) => {
    if (!getCaptchaImageRes) {
      message.error('请先获取图片验证码');
      return;
    }

    const { token } = await SysLoginPostLogin({ ...data, uuid: getCaptchaImageRes.uuid });

    await handleLoginSuccess(autoLogin, token);
  };

  const submit = async (e: FormData) => {
    try {
      const { autoLogin, ...formData } = e;

      if (loginType === LoginType.MOBILE) {
        await loginBySms(autoLogin, formData);
        return;
      }

      if (loginType === LoginType.USERNAME) {
        await loginByUsername(autoLogin, formData);
        return;
      }
    } catch (error) {
      if (loginType === LoginType.USERNAME) {
        getCaptchaImage();
      }
    }
  };

  useEffect(() => {
    if (msg) {
      message.error(searchParams.get('msg'));
      setSearchParams({ redirect }, { replace: true });
    }
  }, []);

  return (
    <div className="h-[100vh]">
      <LoginFormPage<FormData>
        backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        title="RuoYi X Umi"
        subTitle="若依后台管理系统"
        actions={<Actions />}
        onFinish={submit}
      >
        <Tabs
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
          items={items}
        />

        {loginType === LoginType.USERNAME && (
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

              <div className="h-[40px] w-[135px] cursor-pointer border border-solid border-gray-300">
                {getCaptchaImageRes?.img ? (
                  <Image
                    src={`data:image/png;base64,${getCaptchaImageRes?.img}`}
                    preview={false}
                    height={40}
                    width={135}
                    alt="图片验证码"
                    onClick={getCaptchaImage}
                  />
                ) : (
                  <Skeleton.Button active block size="large" />
                )}
              </div>
            </ProFormGroup>
          </>
        )}

        {loginType === LoginType.MOBILE && (
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
        )}

        <ProFormCheckbox name="autoLogin">自动登录</ProFormCheckbox>
      </LoginFormPage>
    </div>
  );
};

export default LoginPage;
