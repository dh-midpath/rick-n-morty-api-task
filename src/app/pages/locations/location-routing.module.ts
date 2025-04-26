import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocationComponent} from './location.component';
import {LocationResolver} from "../../resolvers/location-resolver";

const routes: Routes = [
  {path: '', component: LocationComponent, resolve: {data: LocationResolver}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule {
}
