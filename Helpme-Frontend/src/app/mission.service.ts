import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mission } from './mission.modele';
import {url} from "inspector";

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  public url="http://localhost:5001/newmission";

  Mission m1 = new Mission();
  constructor() {
    this.m1.Http.get(url);
   }
}

