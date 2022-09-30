import { initialStateQueryKey } from '@/models';
import Actions from '@/pages/login/components/Actions';
import FormLoginByPhone from '@/pages/login/components/FormLoginByPhone';
import FormLoginByPwd from '@/pages/login/components/FormLoginByPwd';
import { CaptchaGetGetCode } from '@/services/sys/CaptchaService';
import { SysLoginPostLogin, SysLoginPostSmsLogin } from '@/services/sys/SysLoginService';
import { setToken, StorageType } from '@/utils';
import { LoginFormPage, ProFormCheckbox } from '@ant-design/pro-components';
import { useQueryClient } from '@tanstack/react-query';
import { useRequest } from 'ahooks';
import { message, Tabs } from 'antd';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface FormData extends API.UserNameLoginBo, API.SmsLoginBo {
  autoLogin: boolean;
}

enum LoginType {
  MOBILE = 'MOBILE',
  USERNAME = 'USERNAME',
}

const PageLogin: FC = () => {
  const [loginType, setLoginType] = useState<LoginType>(LoginType.USERNAME);

  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { data: getCaptchaImageRes, run: getCaptchaImage } = useRequest(CaptchaGetGetCode);

  const handleLoginSuccess = async (autoLogin: boolean, token: string) => {
    setToken(autoLogin ? StorageType.LOCAL_STORAGE : StorageType.SESSION_STORAGE, `Bearer ${token}`);

    await queryClient.invalidateQueries(initialStateQueryKey);

    navigate(searchParams.get('redirect') ?? '/');
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
    if (searchParams.get('msg')) {
      message.error(searchParams.get('msg'));
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
          items={[
            {
              label: '账号密码登录',
              key: LoginType.USERNAME,
              children: (
                <FormLoginByPwd captchaImageSrc={getCaptchaImageRes?.img} onCaptchaImageClick={getCaptchaImage} />
              ),
            },
            {
              label: '手机号登录',
              key: LoginType.MOBILE,
              children: <FormLoginByPhone />,
            },
          ]}
        />

        <ProFormCheckbox name="autoLogin">自动登录</ProFormCheckbox>
      </LoginFormPage>
    </div>
  );
};

export default PageLogin;
