import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListModule } from '../generic/table-list/table-list.module';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    TableListModule,
  ]
})
export class ListModule { }
