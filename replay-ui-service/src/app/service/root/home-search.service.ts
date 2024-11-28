import { Injectable } from '@angular/core';
import {SearchService} from '../abstract/search-service';
import {HomeSearchRequest} from '../../entity/request';

@Injectable({
  providedIn: 'root'
})
export class HomeSearchService extends SearchService<HomeSearchRequest, any>{

  constructor() {
    super();
  }

  protected override async callSearchApi(): Promise<void> {
  }
}
