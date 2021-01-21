import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {
  barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
  };
  barChartLabels: Label[] = [
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [48, 38, 60, 35, 46, 77, 60], label: 'Series C' },
  ];
  barChartColors = [
    {
      backgroundColor: '#0074D9',
    },
    {
      backgroundColor: '#3D9970',
    },
    {
      backgroundColor: '#FF851B',
    },
  ];
}
