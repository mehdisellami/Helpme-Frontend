import { AfterViewInit, Component, MissingTranslationStrategy, OnInit } from '@angular/core';
import { MissionService } from 'src/app/service/mission.service';

import * as mapboxgl from 'mapbox-gl'
import { Mission } from '../creation-mission/mission.model';
import { AppComponent } from 'src/app/app.component';
import { logging } from 'protractor';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';




@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit  {



public test:Object;


  map:mapboxgl.Map;
  public mission :any= [];
  public longlat:any=[];

  public x=0;
 

  lat:any=2.331685;
  long:any=48.8942747;

  m:any;

  CheckedBx=false;

  switchon(ev){
    
    this.CheckedBx=true;
 }



 
  

  constructor(public RestMission : MissionService ) {


   }

  ngOnInit(): void {

    this.getMission();

    
    
    console.log(this.x);
    
  
   
    
    
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
      this.x++;

      this.longlat= Array.of(this.longlat);

      this.longlat.forEach(function (value) {
        
       
    });
      
      console.log(this.longlat);
     
    
      },

  );


}






  
}



