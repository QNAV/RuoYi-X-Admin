/// <reference types="vite/client" />

declare const LOGIN_PATH_NAME: '/login';

interface ImportMetaEnv {
  readonly VITE_API_HOST: string;
  readonly VITE_TOKEN_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
