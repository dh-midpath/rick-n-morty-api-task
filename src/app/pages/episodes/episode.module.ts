import {NgModule} from '@angular/core';

import {EpisodeRoutingModule} from './episode-routing.module';

import {EpisodeComponent} from './episode.component';
import {CommonModule} from "@angular/common";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    EpisodeRoutingModule,
    CommonModule,
    NzButtonModule,
    RouterModule,
    NzTypographyModule
  ],
  declarations: [EpisodeComponent],
  exports: [EpisodeComponent]
})
export class EpisodeModule {
}
