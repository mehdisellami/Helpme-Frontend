import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreationMissionComponent } from './components/creation-mission/creation-mission.component';
import { MapComponent } from './components/map/map.component';
import { HomeComponent } from './home/home.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { NewuserComponent } from './newuser/newuser.component';
import { PassworduserComponent } from './passworduser/passworduser.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'app-map', component: MapComponent },
  { path: 'app-creation-mission', component: CreationMissionComponent},
  { path: 'login', component: LoginuserComponent},
  { path: 'register', component: NewuserComponent},
  { path: 'lostpassword', component: PassworduserComponent},
  { path: 'home', component: HomeComponent},
  { path: 'app-creation-user', component: UserComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
