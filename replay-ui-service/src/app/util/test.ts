/*默认就是any*/
import {CommonSearchRequest, HomeSearchRequest} from '../entity/request';

export class FirstService<T> {
  // @ts-ignore
  data: T;
}

/*1. 可以不指定：则为 unknown*/
let firstService_1: FirstService<unknown> = new FirstService();

/*2. 指定：则为指定的类型*/
let firstService_2: FirstService<number> = new FirstService<number>();


/*显示标注为any*/
export class SecondService<T = any> {
  // @ts-ignore
  data: T;
}

let secondService_1: SecondService<any> = new SecondService();
let secondService_2: SecondService<number> = new SecondService<number>();


/*指定类型是某个的基类*/
export class ThirdService<T extends CommonSearchRequest> {
  // @ts-ignore
  data: T;
}

/*类型推断*/
let thirdService_1: ThirdService<CommonSearchRequest> = new ThirdService();
let thirdService_2: ThirdService<HomeSearchRequest> = new ThirdService<HomeSearchRequest>();


export class FourthService<T extends CommonSearchRequest, D extends CommonSearchRequest> {
  // @ts-ignore
  data_1: T;
  // @ts-ignore
  data_2: D;
}

let fourthService_1: FourthService<CommonSearchRequest, CommonSearchRequest> = new FourthService();
let fourthService_2: FourthService<CommonSearchRequest, HomeSearchRequest> = new FourthService<HomeSearchRequest, HomeSearchRequest>();


export class FiveService<T, D> {
  // @ts-ignore
  data_1: T;
  // @ts-ignore
  data_2: D;
}

let fiveService_1: FiveService<unknown, unknown> = new FiveService();
let fiveService_2: FiveService<number, string> = new FiveService<number, string>();


/*通过=限定后，为可选参数*/
export class SixService<T = any, D = CommonSearchRequest, R = any> {
  // @ts-ignore
  data_1: T;
  // @ts-ignore
  data_2: D;
}


/*不传递*/
let sixService = new SixService();

/*传递一个*/
let sixService1 = new SixService<number>();

/*传递两个*/
let sixService2 = new SixService<number,HomeSearchRequest>();
