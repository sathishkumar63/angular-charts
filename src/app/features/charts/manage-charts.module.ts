import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ManageChartsRoutingModule } from './manage-charts-routing.module';
import { AngularMaterialModule } from 'src/app/shared/material.module';
import { ManageChartsComponent } from './containers';
import {
  BarChartComponent,
  BubbleChartComponent,
  DoughnutChartComponent,
  LineChartComponent,
  PieChartComponent,
  RadarChartComponent,
} from './components';

@NgModule({
  declarations: [
    ManageChartsComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    BubbleChartComponent,
    RadarChartComponent,
    DoughnutChartComponent,
  ],
  imports: [
    CommonModule,
    ManageChartsRoutingModule,
    AngularMaterialModule,
    ChartsModule,
  ],
  exports: [ManageChartsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ManageChartsModule {}
