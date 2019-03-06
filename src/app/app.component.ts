import { Component, enableProdMode } from '@angular/core';
import { HttpService } from './components/_helper/http.service';
import { ComService } from './components/_helper/com.service';
import { DataResource } from './components/_shared/data.resource';
declare var jQuery: any;
declare var $: any;
enableProdMode()
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    sub: any;
    _login: boolean = true;
    _showHeader = false;
    _showSidebar = false;
    _showSrchBar = false;
    constructor(public _http: HttpService, public _app: ComService, public _data: DataResource) {
       
        _app.appbean$.subscribe(res => {
            if (res.t1 && res.t1 == "show-menu") {
                this._showHeader = true;
                this._showSidebar = true;
            }
            if (res.t1 && res.t1 == "hide-menu") {
                this._showHeader = false;
                this._showSidebar = false;
            }
            if (res.t1 && res.t1 == "show-header") {
                this._showHeader = true;
            }
            if (res.t1 && res.t1 == "hide-header") {
                this._showHeader = false;
            }
            if (res.t1 && res.t1 == "show-sidebar") {
                this._showSidebar = true;
            }
            if (res.t1 && res.t1 == "hide-sidebar") {
                this._showSidebar = false;
            }
            if (res.t1 && res.t1 == "login-form") {
                console.log(res.t1);
                this._login = true;
                this._showHeader = false;
                this._showSidebar = false;
            }
            if (res.t1 && res.t1 == "no-login-form") {
                this._login = false;
                this._showHeader = true;
                this._showSidebar = true;
            }
            if (res.t1 && res.t1 == "show-loading") {
                $('#loaderModal').modal();
            }
            if (res.t1 && res.t1 == "hide-loading") {
                $('#loaderModal').modal('hide');
            }
        });
    }

    ngOnInit() {
    }

    scrollToTop() {
        window.scrollTo(0, 0);
    }

    handleSrch(event: any) {
        this._data._headerSrch = event;
    }

    getYear() {
        return new Date().getFullYear();
    }
}
