import { NgModule } from '@angular/core';
import {
  DataTableModule,
  SharedModule,
  ColorPickerModule,
  DialogModule,
  InputSwitchModule,
  TooltipModule,
  SliderModule,
  OverlayPanelModule
} from 'primeng/primeng';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    SharedModule,
    DataTableModule,
    ColorPickerModule,
    DialogModule,
    InputSwitchModule,
    TooltipModule,
    SliderModule,
    OverlayPanelModule,
    TableModule
  ],
  exports: [
    SharedModule,
    DataTableModule,
    ColorPickerModule,
    DialogModule,
    InputSwitchModule,
    TooltipModule,
    SliderModule,
    OverlayPanelModule,
    TableModule
  ],
})
export class PrimeModule { }
