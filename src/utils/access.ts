export const rootKey = '*:*:*';

export interface CheckAccessOptions {
  reverse?: boolean;
  strict?: boolean;
}

const check = (accessKey: string | string[], userAccessKey: Set<string>, strict = true) => {
  if (typeof accessKey === 'string') {
    return userAccessKey.has(accessKey);
  }

  if (strict) {
    return accessKey.every((key) => userAccessKey.has(key));
  }

  return accessKey.some((key) => userAccessKey.has(key));
};

export const checkAccess = (accessKey: string | string[], userAccessKey: Set<string>, options?: CheckAccessOptions) => {
  const { reverse = false, strict = true } = options || {};

  if (userAccessKey.has(rootKey)) {
    return true;
  }

  const accessible = check(accessKey, userAccessKey, strict);

  if (reverse) {
    return !accessible;
  }

  return accessible;
};
