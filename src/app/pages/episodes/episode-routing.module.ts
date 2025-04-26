import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EpisodeComponent} from './episode.component';
import {EpisodeResolver} from "../../resolvers/episode-resolver";

const routes: Routes = [
  {path: '', component: EpisodeComponent, resolve: {data: EpisodeResolver}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeRoutingModule {
}
