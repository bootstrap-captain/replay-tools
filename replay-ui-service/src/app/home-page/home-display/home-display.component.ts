import {Component, Inject} from '@angular/core';
import {MatTab, MatTabGroup, MatTabLabel} from '@angular/material/tabs';
import {NgForOf} from '@angular/common';
import {MatTable} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {ColumnInfo, GLOBAL_COLUMNS_TOKEN, GlobalColumnInfo} from '../../entity/globalColumnMap';

@Component({
  selector: 'app-home-display',
  imports: [
    MatTabGroup,
    MatTab,
    MatTabLabel,
    NgForOf,
    MatTable,
    MatSort
  ],
  templateUrl: './home-display.component.html',
  standalone: true,
  styleUrl: './home-display.component.css',
  providers: [
    {
      provide: GLOBAL_COLUMNS_TOKEN,
      useValue: GlobalColumnInfo
    },
  ]
})
export class HomeDisplayComponent {

  /*通过这种方式注入的常量依赖，可以在html中直接使用*/
  constructor(@Inject(GLOBAL_COLUMNS_TOKEN) public globalColumns: ColumnInfo[]) {
  }

  tabs = [
    {
      label: 'OK',
      count: 10,
    },
    {
      label: 'NOK',
      count: 20,
    },
    {
      label: 'NACK',
      count: 30,
    },
    {
      label: 'NO RESPONSE',
      count: 44,
    },
  ]
}
