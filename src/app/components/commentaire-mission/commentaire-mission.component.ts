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

  data;
  public historyMissionUserconnecte:any=[];

  public usernameConnecte :any;
  selectedValue1 =  <any> {};
  value2 : any;





  constructor(private  missionService: MissionService,private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {

    this.usernameConnecte=this.tokenStorage.getUsername();
    this.getUserMissionHistory(this.usernameConnecte);
  }
  getUserMissionHistory(m){
    this.missionService.getUserMissionHistory(m).subscribe(
      (data )=>{
        this.historyMissionUserconnecte=data;
        console.log(this.historyMissionUserconnecte);
      },
    );
  }

  Commentaire(comForm: NgForm) {
    if (comForm.valid) {
      this.data = comForm.value;
    }
  }

    Faireuncommentaire(m){
      this.missionService.Mettreuncommentaire(m).subscribe(
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


