import { AfterViewInit, Component, MissingTranslationStrategy, OnInit } from '@angular/core';
import { MissionService } from 'src/app/service/mission.service';

import * as mapboxgl from 'mapbox-gl'
import { Mission } from '../creation-mission/mission.model';
import { AppComponent } from 'src/app/app.component';




@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit  {






  map:mapboxgl.Map;
  public mission :any= [];
  public longlat:any=[];


  lat:any=2.331685;
  long:any=48.8942747;

  m:any;

  CheckedBx=false;

  click(ev){
    this.CheckedBx=true;
 }


 
  

  constructor(public RestMission : MissionService ) {
   }

  ngOnInit(): void {

    this.getMission();
  
    this.AdresstoLongLAt(this.m);
    
  
  }

  

  getMission() {

   this.RestMission.GetMission().subscribe(

      (data )=>{

        this.mission=data;
        
          console.log(data);
         
        },

    );
   
  }


  
AdresstoLongLAt(m){

 
  this.RestMission.getLongLat(m).subscribe(
    data =>{

      this.longlat=data;

      this.longlat= Array.of(this.longlat);
      console.log(data);
      

      },

  );


}






  
}



