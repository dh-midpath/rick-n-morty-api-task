import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Normal1Component } from './normal1.component';

const routes: Routes = [
  { path: '', component: Normal1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Normal1RoutingModule { }
