import { reqGetRoleList } from '@/services';
import { convertToPaginationParameters } from '@/utils';
import { ProTable } from '@ant-design/pro-components';
import type { FC } from 'react';

const RoleList: FC = () => {
  return <ProTable request={async (...params) => await reqGetRoleList(convertToPaginationParameters(...params))} />;
};

export default RoleList;
