import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterResolver} from "./resolvers/character-resolver";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {
    path: 'home',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {path: 'characters', loadChildren: () => import('./pages/characters/character.module').then(m => m.CharacterModule)},
  {path: 'episodes', loadChildren: () => import('./pages/episodes/episode.module').then(m => m.EpisodeModule)},
  {path: 'locations', loadChildren: () => import('./pages/locations/location.module').then(m => m.LocationModule)},
  {path: 'normal1', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'normal2', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
