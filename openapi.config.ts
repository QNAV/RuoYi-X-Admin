import path from 'path';
import * as process from 'process';
import { generateApi } from 'swagger-typescript-api';

const cwd = process.cwd();
const templatesDir = path.resolve(cwd, './templates');

const gen = async () => {
  await generateApi({
    url: 'https://test-ryx-admin-api.p.quicknav.cn/v3/api-docs/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90%E6%A8%A1%E5%9D%97',
    output: path.resolve(cwd, './src/services/gen'),
    templates: templatesDir,
    modular: true,
    cleanOutput: true,
    httpClientType: 'axios',
  });

  await generateApi({
    url: 'https://test-ryx-admin-api.p.quicknav.cn/v3/api-docs/%E7%B3%BB%E7%BB%9F%E6%A8%A1%E5%9D%97',
    output: path.resolve(cwd, './src/services/system'),
    templates: templatesDir,
    modular: true,
    cleanOutput: true,
    httpClientType: 'axios',
  });

  process.exit();
};

gen().catch(console.error);
