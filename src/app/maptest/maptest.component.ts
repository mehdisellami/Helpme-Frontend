import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';
import { AppModule } from '../app.module';
import { TokenStorageService } from '../auth/token-storage.service';
import { MissionService } from '../service/mission.service';
import { RestService } from '../service/rest.service';



@Component({
  selector: 'app-maptest',
  templateUrl: './maptest.component.html',
  styleUrls: ['./maptest.component.css']
})
export class MaptestComponent implements OnInit {

  map: mapboxgl.Map;
  public mission :any= [];
  public longlat:any=[];
  public maposition:any=[];
public adress:any;
public longitude:any=[];
public latitude:any=[];

  


  constructor(public RestMission : MissionService, private tokenStorage: TokenStorageService ,public restservice :RestService ) { }

  ngOnInit(): void {

    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('pk.eyJ1IjoibWVoZGlzZWxsYW1pIiwiYSI6ImNrZ2t5bnQ3cTA2NDAyeW8xMzBoanVnMm8ifQ.UuXfzm__C3HRsGXfAktk3w');

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [2.390055, 48.8077584],
      zoom: 16.6

    });

    var popup = new mapboxgl.Popup({ offset: 25 }).setText(
      'Construction on the Washington Monument began in 1848.'
      );

      console.log(this.longitude)

      console.log(this.latitude)

        
        
    var marker = new mapboxgl.Marker({
      draggable: false
    })
    
      .setLngLat([ this.longitude, this.latitude])
      
     
      .setPopup(popup)
      .addTo(this.map);
      



      

      this.navigationControl();
      this.LocaliserUtilisateurMapbox();
      this.getMissionenAttente();

      

     
  }


  navigationControl(){
    this.map.addControl(new mapboxgl.NavigationControl());

  }

  LocaliserUtilisateurMapbox(){
    this.map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true
      })
      );
  }


  getMissionenAttente() {
    this.RestMission.GetMissionenAttente().subscribe(
     (data )=>{
         this.mission=data;   
         
        this.AdresstoLongLAt(this.mission.adressMission)

         
           console.log(data);
         },
     );
   }
 
   AdresstoLongLAt(m){
     var x=0;
     var y=1;
     for (let i in this.mission){
       this.RestMission.getLongLat(this.mission[i]?.adressMission).subscribe(
       data =>{
         this.longlat.push(data);
         this.longitude.push(this.longlat[i]?.features[0]?.center[x])
         this.latitude.push(this.longlat[i]?.features[0]?.center[y])
     
         
       },);
     }
     console.log(this.longlat);
     
   }

   
  


}
