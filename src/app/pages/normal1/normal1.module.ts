import {NgModule} from '@angular/core';

import {Normal1RoutingModule} from './normal1-routing.module';

import {Normal1Component} from './normal1.component';
import {CommonModule} from "@angular/common";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    Normal1RoutingModule,
    CommonModule,
    NzButtonModule,
    RouterModule,
    NzTypographyModule
  ],
  declarations: [Normal1Component],
  exports: [Normal1Component]
})
export class Normal1Module {
}
