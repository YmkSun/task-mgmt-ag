import { Injectable } from '@angular/core';
import { HttpService } from '../_helper/http.service';
import { environment } from '../../../environments/environment';

declare var Highcharts: any;
@Injectable()
export class DashboardService {

    constructor(public _http: HttpService) {

    }

    getAdsCounts(userId: any, startDate: any, endDate: any, adsAccountIds: any) {
        //return this._http.get(environment.apiUrl + "Dashboard?userId=" + userId + "&startDate=" + startDate + "&endDate=" + endDate + "&adsAccountIds=" + adsAccountIds);
    }

    generatePieChart(id: any, d: any) {
        Highcharts.chart(id,
            {
                chart: { plotBackgroundColor: null, plotBorderWidth: null, plotShadow: false, type: 'pie' },
                title: { text: '' },
                tooltip: { pointFormat: '</b>{point.percentage:.2f}%</b>' },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '{point.percentage:.2f}%',
                            style: { color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black' }
                        },
                        showInLegend: true
                    }
                },
                credits: { enabled: false },
                series: [{ name: 'Brands', colorByPoint: true, data: d }]
            }
        );
    }


    generateLineChart(id: any, d: any, c: any, yt: any) {
        Highcharts.chart(id, {
            chart: { type: 'line' },
            title: { text: '' },
            subtitle: { text: '' },
            xAxis: {
                categories: c
            },
            yAxis: {
                title: {
                    text: yt
                }
            },
            credits: { enabled: false },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: d
        });
    }

    generateBarChart(id: any, d: any, c: any, yt: any) {
        Highcharts.chart(id, {
            chart: { type: 'column' },
            title: { text: '' },
            subtitle: { text: '' },
            xAxis: {
                categories: c,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: { text: yt }
            },
            credits: { enabled: false },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.2f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: d
        });
    }

}
