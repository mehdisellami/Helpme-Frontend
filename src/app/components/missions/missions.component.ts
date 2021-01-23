import { Component, OnInit } from '@angular/core';
import { User } from '../newuser/user.model';
import { MissionService } from '../../service/mission.service';
import { RestService } from '../../service/rest.service';

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
    this.getMission();
  }

  getMission(){
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

  editmission(id):void{
      window.open("/app-editmission/"+id,"_self");   
  }

  reloadPage() {
    window.location.reload();
  }
}
