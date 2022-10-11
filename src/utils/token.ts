const TOKEN_KEY = import.meta.env.VITE_TOKEN_KEY;

export enum StorageType {
  LOCAL_STORAGE,
  SESSION_STORAGE,
}

export const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
};

export const setToken = (storageType: StorageType, token: string) => {
  clearToken();

  if (storageType === StorageType.LOCAL_STORAGE) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    sessionStorage.setItem(TOKEN_KEY, token);
  }
};

export const getToken = () => localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY) || '';

export const checkToken = () => !!getToken();
