import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { MissionService } from 'src/app/service/mission.service';
import { Mission } from '../creation-mission/mission.model';
import { MissionsComponent } from 'src/app/components/missions/missions.component';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-editmission',
  templateUrl: './editmission.component.html',
  styleUrls: ['./editmission.component.css']
})
export class EditmissionComponent implements OnInit {

  idMission: any;
  missionrecup: any;
  missionInstance:Mission = new Mission();

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
        const type = 'success';
        alert("Modification effectuée !");
        window.open("/app-missions","_self");
      return data;
    },
    (err)=>{alert("ERROR");}
    );
  }
}
