import {NgModule} from '@angular/core';

import {CharacterRoutingModule} from './character-routing.module';

import {CharacterComponent} from './character.component';
import {CommonModule} from "@angular/common";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    CharacterRoutingModule,
    CommonModule,
    NzButtonModule,
    RouterModule,
    NzTypographyModule
  ],
  declarations: [CharacterComponent],
  exports: [CharacterComponent]
})
export class CharacterModule {
}
