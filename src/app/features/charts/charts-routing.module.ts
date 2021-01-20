import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './containers';
import {
  BarChartComponent,
  BubbleChartComponent,
  DoughnutChartComponent,
  LineChartComponent,
  PieChartComponent,
  RadarChartComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: ChartsComponent,
    children: [
      { path: '', redirectTo: '/line-chart', pathMatch: 'full' },
      { path: 'line-chart', component: LineChartComponent },
      { path: 'bar-chart', component: BarChartComponent },
      { path: 'bubble-chart', component: BubbleChartComponent },
      { path: 'doughnut-chart', component: DoughnutChartComponent },
      { path: 'pie-chart', component: PieChartComponent },
      { path: 'radar-chart', component: RadarChartComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
