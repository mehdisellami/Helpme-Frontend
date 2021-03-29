import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationMissionComponent } from './components/creation-mission/creation-mission.component';
import { MapComponent } from './components/map/map.component';
import { HomeComponent } from './components/home/home.component';
import { LoginuserComponent } from './components/loginuser/loginuser.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { PassworduserComponent } from './components/passworduser/passworduser.component';
import { ProfilComponent } from './components/profil/profil.component';
import { MissionsComponent } from './components/missions/missions.component';
import { FeedBackMissionComponent } from './components/feed-back-mission/feed-back-mission.component';
import { EditmissionComponent } from './components/editmission/editmission.component';
import { MaptestComponent } from './maptest/maptest.component';
import { EditUserComponent} from './components/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'app-map', component: MapComponent },
  { path: 'app-creation-mission', component: CreationMissionComponent},
  { path: 'maptest', component: MaptestComponent},
  { path: 'login', component: LoginuserComponent},
  { path: 'register', component: NewuserComponent},
  { path: 'lostpassword', component: PassworduserComponent},
  { path: 'home', component: HomeComponent},
  { path: 'app-profil', component: ProfilComponent},
  { path: 'feedback-mission/:idMission', component: FeedBackMissionComponent},
  { path: 'app-missions', component: MissionsComponent},
  { path: 'app-editmission/:idMission', component: EditmissionComponent},
  { path: 'edituser', component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }