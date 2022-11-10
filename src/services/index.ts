import { Login } from '@/services/system/Login';

export const login = new Login();

const log = async () => {
  const e = await login.sysLoginPostLogin({
    username: 'admin',
    password: '123456',
    uuid: '123',
    code: '123',
  });
  console.log(e.data.data.token);
};
