import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { AngularMaterialModule } from 'src/app/shared/material.module';
import { ChartsComponent } from './containers';
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
    ChartsComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    BubbleChartComponent,
    RadarChartComponent,
    DoughnutChartComponent,
  ],
  imports: [CommonModule, ChartsRoutingModule, AngularMaterialModule],
  exports: [ChartsComponent],
})
export class ChartsModule {}
