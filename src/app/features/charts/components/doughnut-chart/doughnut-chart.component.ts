import { Component } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughnutChartComponent {
  doughnutChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
    },
  };
  doughnutChartLabels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  doughnutChartColors = [
    {
      backgroundColor: ['#0074D9', '#7FDBFF', '#39CCCC'],
    },
    {
      backgroundColor: ['#85144b', '#3D9970', '#B10DC9'],
    },
    {
      backgroundColor: ['#F012BE', '#2ECC40', '#FFDC00'],
    },
  ];
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartLegend = true;
}
