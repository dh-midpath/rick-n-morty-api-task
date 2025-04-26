import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Normal2Component } from './normal2.component';

const routes: Routes = [
  { path: '', component: Normal2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Normal2RoutingModule { }
