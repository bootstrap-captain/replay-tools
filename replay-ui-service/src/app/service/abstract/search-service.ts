import {CommonSearchRequest} from '../../entity/request';

export abstract class SearchService<T extends CommonSearchRequest, D> {

  /*this filed is for log*/
  searchType: string = '';


  // @ts-ignore
  searchRequest: T = {}

  // @ts-ignore
  searchResponse: D = {}


  /*child class to override*/
  protected abstract callSearchApi(): void;

  /*template method*/
  public searchByCondition= async ()=>{
    console.log(`${this.searchType}-search-condition: ${this.searchRequest}`);
    await this.callSearchApi();
    console.log(`${this.searchType}-search-result: ${this.searchResponse}`);
  }

}
