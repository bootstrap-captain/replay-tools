import {Injectable} from '@angular/core';
import {AxiosService} from './axios.service';
import {AxiosInstance} from 'axios';
import {HomeMetadata} from '../../entity/response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  axios!: AxiosInstance;

  constructor(private axiosService: AxiosService) {
    this.axios = this.axiosService.axiosInstance;
  }

  async getHomePageMetadata(): Promise<HomeMetadata> {
    let response = await this.axios.get<HomeMetadata>('home/metadata');
    return response.data;
  }
}
