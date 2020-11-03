import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from './Utilisateur.modele';
import {url} from "inspector";

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  public url="http://localhost:5001/newuser";
  Utilisateur u1 = new Utilisateur();
  constructor() {
    this.u1.Http.get(url);
  }
}

