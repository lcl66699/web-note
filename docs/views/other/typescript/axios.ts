type Method = "get" | "post" | "put" | "head" | "options";
type ResponseType = "blob";

interface AxiosRequest {
  baseUrl?: string;
  url: string;
  data?: any;
  param?: any;
  method: Method;
  headers?: any;
  timeout?: number;
  responseType: ResponseType;
}

interface CustomResponse {
  readonly status: number;
  message?: string;
  data?: any;
}
import axios from "axios";
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  // baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 10000,
});
// request拦截器
service.interceptors.request.use((config) => {});

interface pendingType {}
const pending: Array<pendingType> = [];

class BaseHttp {
  baseUrl: string = process.env.VUE_APP_URL as string;
  headers: object = {};

  private apiAxios({}: AxiosRequest): Promise<CustomResponse> {
    return new Promise((resolve, reject) => {});
  }
}

export {};
