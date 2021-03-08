import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { MissionService } from 'src/app/service/mission.service';
import { Mission } from 'src/app/components/creation-mission/mission.model';


import {TokenStorageService} from "../../auth/token-storage.service";

@Component({
  selector: 'app-commentaire-mission',
  templateUrl: './commentaire-mission.component.html',
  styleUrls: ['./commentaire-mission.component.css']
})
export class CommentaireMissionComponent implements OnInit {

  missionInstance:Mission = new Mission();

  constructor(private  missionService: MissionService) {
  }

  ngOnInit(): void {
  }
 

    Faireuncommentaire(){
      this.missionService.Mettreuncommentaire(this.missionInstance).subscribe(
        (data)=>{
          const type = 'success';
          alert("Commentaire créer !");
          window.open("/app-profil","_self");
          return data;
        },
        (err)=>{alert("ERROR");}
      );

    }

  }


