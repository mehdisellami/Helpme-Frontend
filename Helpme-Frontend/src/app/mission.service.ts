import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mission } from './Mission.modele';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  Mission m1 = new Mission(); 
  public url = "http://localhost:5001/listeMission"

  constructor() {
    this.m1.get<Mission>(this.url,this.m1);

  

   }
}
