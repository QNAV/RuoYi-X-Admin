import type { InitialState } from '@/types';

const access = (initialState?: InitialState) => {
  if (!initialState?.userInfo?.permissions) {
    return {};
  }

  return initialState.userInfo.permissions.reduce((acc, cur) => {
    return { ...acc, [cur]: true };
  }, {});
};

export default access;
