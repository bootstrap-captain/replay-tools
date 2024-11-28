export type CommonSearchRequest = {
  pageNumber?: number;
  pageSize?: number;
  /*table ordering column*/
  orderBy?: string;
  /*order direction*/
  direction?: 'asc' | 'desc' | '';
}


export interface HomeSearchRequest extends CommonSearchRequest {
  uniqueIds?: string[];
  serviceNames: string[];
  replayStatus?: string,
  messageStatus?: string,
  partnerId?: string,
  messageDescription?: string,
}
