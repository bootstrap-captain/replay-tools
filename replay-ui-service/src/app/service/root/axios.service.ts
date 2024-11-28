import {Injectable} from '@angular/core';
import axios, {AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {token} from '../../util/tokenUtil';

const localUrl = 'http://localhost:8080';
const devUrl = 'http://localhost:8080/dev';
const uatUrl = 'http://localhost:8080/uat';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  axiosInstance!: AxiosInstance;

  constructor() {
    this.init();
    this.requestInterceptor();
    this.responseInterceptor();
  }

  private init = () => {
    /*init*/
    this.axiosInstance = axios.create({
      timeout: 100000,
      baseURL: localUrl,
    });
  }

  private requestInterceptor = () => {
    this.axiosInstance?.interceptors.request.use((function (request: InternalAxiosRequestConfig): InternalAxiosRequestConfig<any> {
      request.headers.set('Authorization', 'Bearer ' + token);
      return request;
    }))
  }

  private responseInterceptor = () => {
    this.axiosInstance?.interceptors.response.use(
      function (response: AxiosResponse): AxiosResponse<any, any> {
        return response.data;
      },

      function (error: AxiosResponse) {
        console.log(`response error: ${error}`);
      })
  }
}
