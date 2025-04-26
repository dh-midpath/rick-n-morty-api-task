import {NgModule} from '@angular/core';

import {LocationRoutingModule} from './location-routing.module';

import {LocationComponent} from './location.component';
import {CommonModule} from "@angular/common";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    LocationRoutingModule,
    CommonModule,
    NzButtonModule,
    RouterModule,
    NzTypographyModule
  ],
  declarations: [LocationComponent],
  exports: [LocationComponent]
})
export class LocationModule {
}
