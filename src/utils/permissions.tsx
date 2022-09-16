export const rootKey = '*:*:*';

// 检验用户权限
export const checkPermission = (permKey: string | string[], userPerms: Set<string>, strict = true) => {
  if (userPerms.has(rootKey)) {
    return true;
  }

  if (typeof permKey === 'string') {
    return userPerms.has(permKey);
  }

  if (strict) {
    return permKey.every((key) => userPerms.has(key));
  }

  return permKey.some((key) => userPerms.has(key));
};
