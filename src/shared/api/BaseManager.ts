import axios, { AxiosRequestConfig } from 'axios';

class BaseManager {
  private axiosInstance = axios;
  private reqController?: AbortController;
  constructor() {}

  get<T>(url: string, config?: AxiosRequestConfig) {
    if (this.reqController) {
      this.reqController.abort();
    }
    this.reqController = new AbortController();

    return this.axiosInstance.get<T>(url, {
      ...config,
      signal: this.reqController?.signal,
    });
  }
}

export default BaseManager;
