import { Component, OnInit } from '@angular/core';
import { MissionService } from 'src/app/service/mission.service';
import { ActivatedRoute } from '@angular/router'; 
import { Mission } from '../creation-mission/mission.model';

@Component({
  selector: 'app-editmission',
  templateUrl: './editmission.component.html',
  styleUrls: ['./editmission.component.css']
})
export class EditmissionComponent implements OnInit {

  idMission: any;
  missionInstance:Mission = new Mission();
  missionrecup: any;
  pref: any [];

  constructor(private mission:MissionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idMission=this.route.snapshot.paramMap.get('idMission');
    this.recupMission(this.idMission);
  }

  recupMission(id){
    this.mission.RecupMission(id).subscribe(
      (data)=>{
        this.missionrecup=data;
        console.log(this.mission);
        },
    );
  }

  EditMission()
  {
    this.mission.EditMission(this.missionrecup).subscribe(
      (data)=>{
        alert("Modification effectuée !");
        window.open("/app-missions","_self");
      return data;
    },
    (err)=>{alert("ERROR");}
    );
  }
}
