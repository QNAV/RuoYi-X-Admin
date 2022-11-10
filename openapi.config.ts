import path from 'path';
import { generateApi } from 'swagger-typescript-api';

const outputDir = path.resolve(process.cwd(), './src/services/system');
const templatesDir = path.resolve(process.cwd(), './templates');
generateApi({
  url: 'https://test-ryx-admin-api.p.quicknav.cn/v3/api-docs?group=2.%E7%B3%BB%E7%BB%9F%E6%A8%A1%E5%9D%97',
  output: outputDir,
  modular: true,
  templates: templatesDir,
  httpClientType: 'axios',
}).catch(console.error);
