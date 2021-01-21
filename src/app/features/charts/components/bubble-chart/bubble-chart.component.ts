import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss'],
})
export class BubbleChartComponent {
  bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 50,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 50,
          },
        },
      ],
    },
  };
  bubbleChartType: ChartType = 'bubble';
  bubbleChartLegend = true;

  bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 15, y: 15, r: 15 },
        { x: 25, y: 15, r: 25 },
        { x: 36, y: 12, r: 33 },
        { x: 10, y: 18, r: 18 },
        { x: 45, y: 40, r: 15 },
        { x: 20, y: 35, r: 25 },
        { x: 30, y: 22, r: 33 },
        { x: 17, y: 43, r: 18 },
      ],
      label: 'Series A',
      backgroundColor: '#2ECC40',
      borderColor: '#85144b',
      hoverBackgroundColor: '#B10DC9',
      hoverBorderColor: '#FF4136',
    },
    {
      data: [
        { x: 10, y: 25, r: 15 },
        { x: 20, y: 35, r: 25 },
        { x: 30, y: 42, r: 33 },
        { x: 27, y: 8, r: 18 },
        { x: 40, y: 20, r: 15 },
        { x: 50, y: 15, r: 10 },
        { x: 20, y: 12, r: 33 },
        { x: 10, y: 3, r: 18 },
      ],
      label: 'Series B',
      backgroundColor: '#FF851B',
      borderColor: '#85144b',
      hoverBackgroundColor: '#001f3f',
      hoverBorderColor: '#0074D9',
    },
  ];
  bubbleChartColors = [
    {
      backgroundColor: [
        '#001f3f',
        '#0074D9',
        '#7FDBFF',
        '#39CCCC',
        '#3D9970',
        '#2ECC40',
        '#01FF70',
        '#FFDC00',
      ],
    },
    {
      backgroundColor: [
        '#B10DC9',
        '#F012BE',
        '#85144b',
        '#FF4136',
        '#FF851B',
        '#39CCCC',
        '#7FDBFF',
        '#0074D9',
      ],
    },
  ];
}
