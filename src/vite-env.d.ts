/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_NAME: string;
  readonly VITE_API_HOST: string;
  readonly VITE_TOKEN_KEY: string;
  readonly VITE_LOGIN_PATH_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
