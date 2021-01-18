import { Component, OnInit } from '@angular/core';
import { User } from '../newuser/user.model';
import { MissionService } from '../service/mission.service';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  public mission:any=[];

  userInstance: User = new User();

  constructor(public missionservice :MissionService , public restservice : RestService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.missionservice.GetMission().subscribe(
      (data )=>{
        this.mission=data;

        console.log(this.mission);

        },

    );
  }

  delmission(id):void{
    this.missionservice.DeleteMission(id)
    .subscribe( data => {
      alert("Mission " + id + " supprimée");
      this.reloadPage(); 
    },
    (err)=>{
    }
    );  
}

reloadPage() {
  window.location.reload();
}

}
