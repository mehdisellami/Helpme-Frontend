import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreationMissionComponent } from './components/creation-mission/creation-mission.component';
import { MapComponent } from './components/map/map.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  { path: 'app-map', component: MapComponent },
  { path: 'app-creation-mission', component: CreationMissionComponent},
  { path: 'login', component: LoginuserComponent},
  { path: 'app-creation-user', component: UserComponent},
  { path: 'app-create-user', component: CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
