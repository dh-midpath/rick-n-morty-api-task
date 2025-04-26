import {NgModule} from '@angular/core';

import {Normal2RoutingModule} from './normal2-routing.module';

import {Normal2Component} from './normal2.component';
import {CommonModule} from "@angular/common";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    Normal2RoutingModule,
    CommonModule,
    NzButtonModule,
    RouterModule,
    NzTypographyModule
  ],
  declarations: [Normal2Component],
  exports: [Normal2Component]
})
export class Normal2Module {
}
