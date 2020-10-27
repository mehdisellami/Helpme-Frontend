import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HellomsgComponent } from './hellomsg/hellomsg.component';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MapComponent } from './map/map.component';
import { RouterModule } from '@angular/router';
import { CreationMissionComponent } from './creation-mission/creation-mission.component';




@NgModule({
  declarations: [
    AppComponent,
    HellomsgComponent,
    MapComponent,
    CreationMissionComponent

    
  ],
  imports: [
    BrowserModule,
   
    
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
