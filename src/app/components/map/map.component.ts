import { AfterViewInit, Component, MissingTranslationStrategy, OnInit } from '@angular/core';
import { MissionService } from 'src/app/service/mission.service';

import * as mapboxgl from 'mapbox-gl'
import { Mission } from '../creation-mission/mission.model';
import { AppComponent } from 'src/app/app.component';
import { logging } from 'protractor';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { RestService } from 'src/app/service/rest.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit  {
  


public test:Object;


 
public useronnecte:any=[];

public tokenUsername :any;


  public mission :any= [];
  public apiMaboxDrivingTable :any= [];
  public longlat:any=[];
  public maposition:any=[];
  public distanceTab:any=[];
  public m:any;
  public index=0;
  public range :any;
  public up_forms:any;
  

  public secondeminute:any=[];

  public MintoSec : any;
  CheckedBx=false;

  
  switchon(ev){
    this.CheckedBx=true;
  }


 


  constructor(public RestMission : MissionService, private tokenStorage: TokenStorageService ,public restservice :RestService ) {

   }

  ngOnInit(): void {
    this.getMissionenAttente();
    this.getPosition();

    this.tokenUsername=this.tokenStorage.getUsername();
    this.getUserIdbyUsername(this.tokenUsername);

    


    
  }

  filter(){
    this.range=(<HTMLInputElement> document.getElementById("range"))?.value ;
  }

  distance (lat1, lon1, lat2, lon2) : any {
    var p = 0.017453292519943295;    // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p)/2 + c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))/2;
    this.distanceTab.push(Math.round( 12742 * Math.asin(Math.sqrt(a)))); // 2 * R; R = 6371 km
  }

  secToMin(){
    for (let i in this.mission){
     // console.log(Math.round((this.apiMaboxDrivingTable[i]?.routes[0]?.duration)/60));
      this.secondeminute.push(Math.round((this.apiMaboxDrivingTable[i]?.routes[0]?.duration)/60));
      
    }
   
  }
 
  getPosition(): Promise<any>{
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        this.maposition.push(resp.coords.longitude,resp.coords.latitude)
        console.log(this.maposition);
      },
      err => {reject(err);});
    });
  }


  getMissionenAttente() {
   this.RestMission.GetMissionenAttente().subscribe(
    (data )=>{
        this.mission=data;    
          console.log(data);
        },
    );
  }

  AdresstoLongLAt(m){
    for (let i in this.mission){
      this.RestMission.getLongLat(this.mission[i]?.adressMission).subscribe(
      data =>{
        this.longlat.push(data);
        this.distance(this.longlat[i]?.features[0].center[1],this.longlat[i]?.features[0].center[0],this.maposition[1],this.maposition[0]);
        this.apiwalkingMapbox(this.maposition[0],this.maposition[1],this.longlat[i]?.features[0].center[0],this.longlat[i]?.features[0].center[1])  ;
        
      },);
    }
    console.log(this.longlat);
    
  }




apiwalkingMapbox(lnga,lata,lngb,latb) {
  
 
  this.RestMission.apiWalkinggMapbox(lnga,lata,lngb,latb).subscribe(

     (data )=>{

      
       this.apiMaboxDrivingTable.push(data);
       //console.log(this.apiMaboxDrivingTable);
             
       },

   );
   
   
 }


 getUserIdbyUsername(m){
  this.restservice.getIDUserConnecte(m).subscribe(
    (data )=>{
      this.useronnecte=data;
      console.log(this.useronnecte);
      },
  );
}

 affecterUserMission(i,j,user)
      {
        this.RestMission.affecterUserMissionPUT(i,j,user).subscribe(
          (data)=>{
            const type = 'success';
            alert("Vous avez pris en charge la mission");
            window.open("/app-missions","_self");
          return data;
        },
        (err)=>{
          alert("ERROR");
         
        }
      );
      
        
      }



  
  avancer(){

    console.log("hello")

  }


  
}



