import { regUrl } from './regExp';

export const isHttpUrl = (url: string) => regUrl.test(url);
