import { Component, OnInit } from '@angular/core';
import { MissionService } from 'src/app/service/mission.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  public mission:any=[];




  CheckedBx=false;

  click(ev){
    this.CheckedBx=true;
 }

  constructor(public RestMission : MissionService) { }

  ngOnInit(): void {
    this.getMission();
  }



  getMission(){
    this.RestMission.GetMission().subscribe(
      (data )=>{
        this.mission=data;

        console.log(data);

        },

    );
  }
}
