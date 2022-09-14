// 判断是否为 http 或 https 协议url
export const isHttpUrl = (url: string): boolean => {
  return /^(http|https):\/\//.test(url);
};
