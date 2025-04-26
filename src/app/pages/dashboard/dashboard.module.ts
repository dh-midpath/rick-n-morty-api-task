import {NgModule} from '@angular/core';

import {DashboardRoutingModule} from './dashboard-routing.module';

import {DashboardComponent} from './dashboard.component';
import {CommonModule} from "@angular/common";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    DashboardRoutingModule,
    CommonModule,
    NzButtonModule,
    NzTypographyModule,
    RouterModule,
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {
}
