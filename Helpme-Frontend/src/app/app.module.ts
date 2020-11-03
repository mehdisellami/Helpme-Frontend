import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MapComponent } from './components/map/map.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CreationMissionComponent } from './components/creation-mission/creation-mission.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  
    MapComponent,
    UserComponent,
    CreationMissionComponent

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
