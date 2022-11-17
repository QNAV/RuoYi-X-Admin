import type { AxiosRequestConfig } from 'axios';
import { stringify } from 'qs';

export class RequestCanceler {
  private pendingRequest: Map<string, AbortController>;

  public constructor() {
    this.pendingRequest = new Map();
  }

  public addPendingRequest(config: AxiosRequestConfig) {
    const requestKey = this.generateReqKey(config);
    if (!this.pendingRequest.has(requestKey)) {
      const abortController = new AbortController();
      config.signal = abortController.signal;
      this.pendingRequest.set(requestKey, abortController);
      return;
    }
    config.signal = this.pendingRequest.get(requestKey)!.signal;
  }

  public removePendingRequest(config: AxiosRequestConfig) {
    const requestKey = this.generateReqKey(config);
    if (!this.pendingRequest.has(requestKey)) return;
    this.pendingRequest.get(requestKey)!.abort();
    this.pendingRequest.delete(requestKey);
  }

  private generateReqKey({ method, url, params, data }: AxiosRequestConfig) {
    return [url || '', method || '', stringify(params || {}), stringify(data || {})].join('_');
  }
}
