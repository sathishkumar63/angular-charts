import { Component } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
    },
  };
  pieChartLabels: Label[] = ['Sales Q1', 'Sales Q2', 'Sales Q3'];
  pieChartData: SingleDataSet = [120, 150, 180];
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartColors = [
    {
      backgroundColor: ['#0074D9', '#2ECC40', '#FFDC00'],
    },
  ];
}
