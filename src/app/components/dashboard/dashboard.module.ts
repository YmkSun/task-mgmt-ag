import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';

const dashboardRoutes: Routes = [
    { path: '', component: DashboardComponent }
];

export const DashboardRouteModule: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);


@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        FormsModule,
        RouterModule,
        DashboardRouteModule
    ],
    providers: [
        DashboardService   
    ],
    bootstrap: []
})
export class DashboardModule { }
