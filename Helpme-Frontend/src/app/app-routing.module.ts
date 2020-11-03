import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreationMissionComponent } from './components/creation-mission/creation-mission.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  { path: 'app-map', component: MapComponent },
  { path: 'app-creation-mission', component: CreationMissionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
