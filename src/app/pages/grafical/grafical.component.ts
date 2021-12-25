import { Component, OnInit } from '@angular/core'
import { ChartData, ChartType, Color } from 'chart.js'

@Component({
  selector: 'app-grafical',
  templateUrl: './grafical.component.html',
  styles: [],
})
export class GraficalComponent implements OnInit {
  constructor() {}

  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ]
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: 'rgba(148,159,177,0.2)',
      },
    ],
  }
  public doughnutChartType: ChartType = 'doughnut'

  ngOnInit(): void {}
}
