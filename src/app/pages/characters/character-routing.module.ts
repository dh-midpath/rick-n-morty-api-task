import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterComponent} from './character.component';
import {CharacterResolver} from "../../resolvers/character-resolver";

const routes: Routes = [
  {path: '', component: CharacterComponent, resolve: {data: CharacterResolver}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule {
}
