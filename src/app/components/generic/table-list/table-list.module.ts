import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list.component';
import { PrimeModule } from 'src/assets/module/material/prime.modele';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilePondModule } from 'ngx-filepond';
import { MaterialModule } from 'src/assets/module/material/material.module';

@NgModule({
  declarations: [TableListComponent],
  exports: [TableListComponent],
  imports: [
    CommonModule,
    PrimeModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FilePondModule
  ]
})
export class TableListModule { }
