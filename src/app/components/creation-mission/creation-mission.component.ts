import { Component, OnInit } from '@angular/core';
import { MissionService } from 'src/app/service/mission.service';
import { Mission } from './mission.model';

@Component({
  selector: 'app-creation-mission',
  templateUrl: './creation-mission.component.html',
  styleUrls: ['./creation-mission.component.css']
})
export class CreationMissionComponent implements OnInit {

  missionInstance:Mission = new Mission();

  constructor( private mission:MissionService) {}

  ngOnInit(): void {}

  btnadd():void{
    this.mission.PostMission(this.missionInstance)
    .subscribe( data => {
      alert("Mission créée");
      return this.missionInstance=data;
    },
    (err)=>{});  
  }
}