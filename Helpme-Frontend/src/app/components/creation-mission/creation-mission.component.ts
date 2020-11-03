import { Component, OnInit } from '@angular/core';

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
  constructor() {
  this.prenom = 'Alexis';
  this.nom = 'Sidate';
  this.prenom2=this.prenom;
  this.nom2=this.nom;
  this.description="Décrivez en détail votre demande";
   }

  ngOnInit(): void {
  }

}
