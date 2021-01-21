import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreationMissionComponent } from './components/creation-mission/creation-mission.component';
import { MapComponent } from './components/map/map.component';
import { HomeComponent } from './components/home/home.component';
import { LoginuserComponent } from './components/loginuser/loginuser.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { PassworduserComponent } from './components/passworduser/passworduser.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MissionsComponent } from './components/missions/missions.component';
import { FeedBackMissionComponent } from './components/feed-back-mission/feed-back-mission.component';

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
  { path: 'app-profile', component: ProfileComponent},
  { path: 'feedback-mission', component: FeedBackMissionComponent},
  { path: 'app-missions', component: MissionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
