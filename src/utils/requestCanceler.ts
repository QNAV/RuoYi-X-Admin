import type { AxiosRequestConfig } from 'axios';
import { stringify } from 'qs';

export class RequestCanceler {
  public pendingRequestMap: Map<string, AbortController>;

  public constructor() {
    this.pendingRequestMap = new Map();
  }

  public addPendingRequest(config: AxiosRequestConfig) {
    const requestKey = this.generateReqKey(config);
    if (!this.pendingRequestMap.has(requestKey)) {
      const abortController = new AbortController();
      config.signal = abortController.signal;
      this.pendingRequestMap.set(requestKey, abortController);
      return;
    }
    config.signal = this.pendingRequestMap.get(requestKey)!.signal;
  }

  public removePendingRequest(config: AxiosRequestConfig) {
    const requestKey = this.generateReqKey(config);
    if (!this.pendingRequestMap.has(requestKey)) return;
    this.pendingRequestMap.delete(requestKey);
  }

  public clearPendingRequest() {
    this.pendingRequestMap.forEach((abortController) => {
      abortController.abort();
    });
    this.pendingRequestMap.clear();
  }

  private generateReqKey({ method, url, params, data }: AxiosRequestConfig) {
    return [url || '', method || '', stringify(params || {}), stringify(data || {})].join('_');
  }
}
