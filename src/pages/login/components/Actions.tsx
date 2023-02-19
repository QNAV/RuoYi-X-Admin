import { WechatOutlined } from '@ant-design/icons';
import { App, Divider } from 'antd';
import type { FC } from 'react';

const Actions: FC = () => {
  const { message } = App.useApp();
  return (
    <div className="flex flex-col justify-center items-center">
      <Divider plain>
        <span className="text-sm font-normal text-neutral-400">其他登录方式</span>
      </Divider>

      <div
        onClick={() => {
          message.info('敬请期待');
        }}
        className="flex justify-center items-center cursor-pointer rounded-full h-[40px] w-[40px] border-solid border border-gray-300"
      >
        <WechatOutlined style={{ fontSize: '20px', color: '#00ac84' }} />
      </div>
    </div>
  );
};

export default Actions;
