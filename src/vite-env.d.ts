/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_HOST: string;
  readonly VITE_TOKEN_KEY: string;
  readonly VITE_APP_MONITRO_ADMIN: string;
  readonly VITE_APP_XXL_JOB_ADMIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
