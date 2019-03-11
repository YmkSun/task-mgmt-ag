import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeadMenuComponent } from './components/navmenu/head-menu.component';
import { SidebarMenuComponent } from './components/navmenu/sidebar-menu.component';
import { FooterComponent } from './components/navmenu/footer.component';

import { ConfigService, configProvider } from './components/_helper/config.service';
import { HttpService } from './components/_helper/http.service';
import { UtilService } from './components/_helper/util.service';
import { ComService } from './components/_helper/com.service';
import { DataResource } from './components/_shared/data.resource';


import * as $ from 'jquery';
import * as jQuery from 'jquery';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './components/login/login.module#LoginModule' },
  { path: 'dashboard', loadChildren: './components/dashboard/dashboard.module#DashboardModule' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeadMenuComponent,
    SidebarMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    HttpService,
        ConfigService,
        UtilService,
        DataResource,        
        ComService,
        { deps: [ConfigService], multi: true, provide: APP_INITIALIZER, useFactory: configProvider },
        DataResource,
        { provide: 'BASE_URL', useFactory: getBaseUrl }
  ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}