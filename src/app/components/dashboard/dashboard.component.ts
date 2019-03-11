import { Component, OnInit } from '@angular/core';
import { DataResource } from '../_shared/data.resource';
import { DashboardService } from './dashboard.service';
import { UtilService } from '../_helper/util.service';
import { ComService } from '../_helper/com.service';
declare var jQuery: any;
declare var google: any;
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.style.css']
})
export class DashboardComponent implements OnInit {

    constructor(public _data: DataResource, public dashboard: DashboardService, public _util: UtilService, public comm: ComService) {

    }

    ngOnInit() {
        this.comm.sendBean({ t1: 'no-login-form' });
        this.getItemCounts();
        this.scrollToTop();
    }

    ngAfterViewInit() {
        this.showPieChart();
        this.showLineChart();
        this.showBarChart();
    }

    scrollToTop() {
        window.scrollTo(0, 0);
    }

    getItemCounts() {
        let userid = this._data.getUserId();
        let startDate = this._util.getCurrentDate();
        let endDate = this._util.getCurrentDate();

    }

    showPieChart() {
        this.dashboard.generatePieChart('pie', [{
            name: 'IE',
            y: 56.33
        }, {
            name: 'Chrome',
            y: 24.03
        }, {
            name: 'Firefox',
            y: 10.38
        }, {
            name: 'Safari',
            y: 4.77
        }, {
            name: 'Opera',
            y: 0.91
        }]);
    }

    showLineChart() {
        this.dashboard.generateLineChart('line', [{
            name: 'Installation',
            data: [43934, 52503, 57177, 69658]
        }, {
            name: 'Manufacturing',
            data: [24916, 24064, 29742, 29851]
        }, {
            name: 'Sales & Distribution',
            data: [11744, 17722, 16005, 19771]
        }, {
            name: 'Project Development',
            data: [8332, 43990, 7988, 12169]
        }, {
            name: 'Other',
            data: [12908, 5948, 8105, 11248]
        }], ["Jan", "Feb", "Mar", "Apr"], 'Amount');
    }

    showBarChart() {
        this.dashboard.generateBarChart('bar', [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2]
        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4]
        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4]
        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7]
        }], ['Jan', 'Feb', 'Mar', 'Apr'], 'Y Title');
    }

}
