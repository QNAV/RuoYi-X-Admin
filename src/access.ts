import type { InitialState } from '@/types';
import { getUserPermissions, getUserRoutesPermissions, rootKey } from '@/utils';
import { isObject } from 'lodash-es';

type VerifyPermissions = (permissions: string | string[], strict: boolean) => boolean;

const access = (initialState: InitialState) => {
  const permissionsMap = getUserPermissions(initialState?.userInfo?.permissions ?? []);

  const verifyPermissions: VerifyPermissions = (permissions, strict = true) => {
    // 未完成初始化，全部返回 false
    if (!permissionsMap || !isObject(permissionsMap)) return false;

    // 拥有 root 权限，全部通过
    if (permissionsMap?.[rootKey]) return true;

    if (typeof permissions === 'string') {
      return !!permissionsMap?.[permissions];
    }

    // 严格模式，全部权限都必须存在
    if (strict) {
      return permissions.every((key) => !!permissionsMap?.[key]);
    }

    return !!permissions.find((key) => !!permissionsMap?.[key]);
  };

  return {
    verifyPermissions,
    ...getUserRoutesPermissions(initialState?.userRoutes ?? []),
  };
};

export default access;
