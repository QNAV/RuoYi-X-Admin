import path from 'path';
import { generateApi } from 'swagger-typescript-api';

const cwd = process.cwd();
const outputDir = path.resolve(cwd, './src/services/system');
const templatesDir = path.resolve(cwd, './templates');

generateApi({
  url: 'https://test-imp-admin-api.p.quicknav.cn/v3/api-docs?group=1.%E7%B3%BB%E7%BB%9F%E6%A8%A1%E5%9D%97',
  output: outputDir,
  templates: templatesDir,
  modular: true,
  cleanOutput: true,
  httpClientType: 'axios',
}).catch(console.error);
