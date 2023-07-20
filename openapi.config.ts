import * as dotenv from 'dotenv';
import * as path from 'path';
import * as process from 'process';
import type { GenerateApiParams } from 'swagger-typescript-api';
import { generateApi } from 'swagger-typescript-api';

const cwd = process.cwd();
const templatesDir = path.resolve(cwd, './templates');

const envPath = ['.env.local', '.env'];

const commonParams: Partial<GenerateApiParams> = {
  modular: true,
  cleanOutput: true,
  httpClientType: 'axios',
  codeGenConstructs: (struct) => {
    return {
      Keyword: {
        ...struct.Keyword,
        Object: 'Record<string, any>',
      },
    };
  },
};

const gen = async () => {
  let API_HOST = '';

  envPath.some((path) => {
    dotenv.config({
      path,
    });

    const VITE_API_HOST = process.env.VITE_API_HOST;

    if (VITE_API_HOST) {
      API_HOST = VITE_API_HOST;
    }

    return !!VITE_API_HOST;
  });

  await generateApi({
    url: `${API_HOST}/v3/api-docs/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90%E6%A8%A1%E5%9D%97`,
    output: path.resolve(cwd, './src/services/gen'),
    templates: templatesDir,
    ...commonParams,
  });

  await generateApi({
    url: `${API_HOST}/v3/api-docs/%E7%B3%BB%E7%BB%9F%E6%A8%A1%E5%9D%97`,
    output: path.resolve(cwd, './src/services/system'),
    templates: templatesDir,
    ...commonParams,
  });

  process.exit();
};

gen().catch(console.error);
