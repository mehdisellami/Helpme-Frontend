import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MapComponent } from './components/map/map.component';
import { CreationMissionComponent } from './components/creation-mission/creation-mission.component';
import { FormsModule } from '@angular/forms';
import { LoginuserComponent } from './components/loginuser/loginuser.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { PassworduserComponent } from './components/passworduser/passworduser.component';
import { HomeComponent } from './components/home/home.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { MissionsComponent } from './components/missions/missions.component';
import { FeedBackMissionComponent } from './components/feed-back-mission/feed-back-mission.component';
import { ProfilComponent } from './components/profil/profil.component';
import { EditmissionComponent } from './components/editmission/editmission.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CreationMissionComponent,
    LoginuserComponent,
    NewuserComponent,
    PassworduserComponent,
    HomeComponent,
    MissionsComponent,
    FeedBackMissionComponent,
    ProfilComponent,
    EditmissionComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlBfKBkOraEGnmbifa35uLfKLqtydDumc'
    }),

    AgmSnazzyInfoWindowModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoibWVoZGlzZWxsYW1pIiwiYSI6ImNrZ2t5bnQ3cTA2NDAyeW8xMzBoanVnMm8ifQ.UuXfzm__C3HRsGXfAktk3w', // Optional, can also be set per map (accessToken input of mgl-map)
      geocoderAccessToken: 'pk.eyJ1IjoibWVoZGlzZWxsYW1pIiwiYSI6ImNrZ2t5bnQ3cTA2NDAyeW8xMzBoanVnMm8ifQ.UuXfzm__C3HRsGXfAktk3w'
    }),

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }