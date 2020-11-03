import { Component, OnInit } from '@angular/core';
import { MissionService } from 'src/app/service/mission.service';
import { Mission } from './mission.model';

@Component({
  selector: 'app-creation-mission',
  templateUrl: './creation-mission.component.html',
  styleUrls: ['./creation-mission.component.css']
})
export class CreationMissionComponent implements OnInit {
  prenom: string;
  nom: string;
  prenom2: string;
  nom2: string;
  adresse: string;
  typemission: string;
  telephone: string;
  date: string;
  email: string;
  description: string;

  missionInstance:Mission = new Mission();


  constructor( private mission:MissionService) {
  this.prenom = 'Alexis';
  this.nom = 'Sidate';
  this.prenom2=this.prenom;
  this.nom2=this.nom;
  this.description="Décrivez en détail votre demande";
   }

  ngOnInit(): void {
    this.btnadd();
  }


  btnadd():void{

    this.mission.PostMission(this.missionInstance)
    .subscribe( data => {
      alert("Mission Ajouté ");
      return data;
    },
    (err)=>{
      console.log(err);
    }
    );
    
}
}