import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-charts',
  templateUrl: './manage-charts.component.html',
  styleUrls: ['./manage-charts.component.scss'],
})
export class ManageChartsComponent implements OnInit {
  navLinks = [
    { path: 'bar-chart', label: 'Bar Chart' },
    { path: 'bubble-chart', label: 'Bubble Chart' },
    { path: 'doughnut-chart', label: 'Doughnut Chart' },
    { path: 'line-chart', label: 'Line Chart' },
    { path: 'pie-chart', label: 'Pie Chart' },
    { path: 'radar-chart', label: 'Radar Chart' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
