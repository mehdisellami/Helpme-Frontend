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
  tranche:string="jeune";
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
    (err)=>{alert("ERROR");}
    );
  }

  editmission(id):void{
      window.open("/app-editmission/"+id,"_self");
  }

  missionterminer(id):void{
    this.missionservice.Missionterminer(id)
    .subscribe( data => {
      alert("Mission " + id + " terminée");
      this.reloadPage();
    },
    (err)=>{alert("ERROR");}
    );
  }

  annulerfin(id):void{
    this.missionservice.Annulerfin(id)
    .subscribe( data => {
      alert("Vous avez annulé la fin de la mission " + id);
      this.reloadPage();
    },
    (err)=>{alert("ERROR");}
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
