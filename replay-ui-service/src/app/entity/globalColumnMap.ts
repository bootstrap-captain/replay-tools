import {InjectionToken} from '@angular/core';

export type ColumnInfo = {
  /*columnKey from backend*/
  columnKey: string;

  /*column name displayed in the UI*/
  columnName: string;

  /*the column is sorted or not*/
  isSortedColumn?: boolean

  /*when user move to this column, a hint should be shown*/
  hint?: string;
}

const OK_HINT = 'Message processed successfully';
const NACK_HINT = 'Message failed due to technical error in CIP';
const NOK_HINT = 'Message failed due to functional error in Flexcube';
const NO_RESPONSE_HINT = 'Response not received from CIP due to an issue in CIP/Flexcube';

export const GlobalColumnInfo: ColumnInfo[] = [
  {columnKey: 'uniqueId', columnName: 'Unique ID'},
  {columnKey: 'serviceName', columnName: 'Service Name'},
  {columnKey: 'serviceVersion', columnName: 'Service Version'},
  {columnKey: 'partnerId', columnName: 'Partner CSI'},
  {columnKey: 'replayStatus', columnName: 'Replay Status'},
  {columnKey: 'countryCode', columnName: 'Country Code'},
  {columnKey: 'messageStatus', columnName: 'Message Status'},
  {columnKey: 'messageDescription', columnName: 'Message Description'},
  {columnKey: 'messageDateTime', columnName: 'Message Time'},
  {columnKey: 'makerId', columnName: 'Maker ID'},
  {columnKey: 'lastUpdatedTimeByMaker', columnName: 'Maker Updated Time'},
  {columnKey: 'checkerId', columnName: 'Checker Updated Time'},
  {columnKey: 'lastUpdatedByChecker', columnName: 'Checker Updated Time'},
  {columnKey: 'noResponse', columnName: 'NO RESPONSE', hint: NO_RESPONSE_HINT},
  {columnKey: 'nack', columnName: 'NACK', hint: NACK_HINT},
  {columnKey: 'nok', columnName: 'NOK', hint: NOK_HINT},
  {columnKey: 'ok', columnName: 'OK', hint: OK_HINT},
]

export const GLOBAL_COLUMNS_TOKEN = new InjectionToken<ColumnInfo[]>('GlobalColumnInfo definition');
