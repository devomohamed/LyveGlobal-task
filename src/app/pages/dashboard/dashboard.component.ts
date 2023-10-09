import { Component } from '@angular/core';
import { ComplaintsWithPercent, Population, RevenuChartService } from '../../shared/services/revenu-chart.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  now: Date = new Date();
  minDate: number = new Date().setDate(this.now.getDate()-14); // 2 weeks before the current date
  maxDate: number = new Date().setDate(this.now.getDate()+14); // 2 weeks after the current date

  g():number{
    return window.innerWidth / 1.5;
  }

  fontStyles: Array<{ text: string, style: string }> = [{
    text: "Day",
    style: "bold"
}, {
    text: "Week",
    style: "italic"
}, {
    text: "Month",
    style: "underline"
}
];


dataSource: ComplaintsWithPercent[];
populationData: Population[];

  constructor(service: RevenuChartService) {
    this.dataSource = service.getComplaintsData();
    this.populationData = service.getPopulationData();
  }






customizeTooltip = (info: any) => ({
  html: `<div><div class='tooltip-header'>${
    info.argumentText}</div>`
              + '<div class=\'tooltip-body\'><div class=\'series-name\'>'
              + `<span class='top-series-name'>${info.points[0].seriesName}</span>`
              + ': </div><div class=\'value-text\'>'
              + `<span class='top-series-value'>${info.points[0].valueText}</span>`
              + '</div><div class=\'series-name\'>'
              + `<span class='bottom-series-name'>${info.points[1].seriesName}</span>`
              + ': </div><div class=\'value-text\'>'
              + `<span class='bottom-series-value'>${info.points[1].valueText}</span>`
              + '% </div></div></div>',
});

customizeLabelText = (info: any) => `${info.valueText}%`;
types: string[] = ['area', 'stackedarea', 'fullstackedarea'];









}
