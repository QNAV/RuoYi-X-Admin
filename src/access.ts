import type { InitialState } from '@/types';
import { getUserPermissions, getUserRoutesPermissions } from '@/utils';

const access = (initialState: InitialState) => {
  return {
    ...getUserPermissions(initialState?.userInfo?.permissions ?? []),
    ...getUserRoutesPermissions(initialState?.userRoutes ?? []),
  };
};

export default access;
