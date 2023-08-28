import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  public pieChartData = {
    labels: ['Typescript', 'Angular', 'React', 'Bootstrap/Material'],
    datasets: [
      {
        data: [4, 2, 2, 1],
        backgroundColor: [
          'rgb(0, 122, 204)',
          'rgb(151, 0, 0)',
          'rgb(32, 35, 42)',
          'rgb(128,0,128)',
        ],
        hoverOffset: 2,
      },
    ],
  };
}
