import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mission } from '../components/creation-mission/mission.model';






@Injectable({providedIn: 'any'}
)
export class MissionService {

  public urlpostmission="http://localhost:5001/newuser";

  public urlgetmission="http://localhost:5001/listeUser";

  constructor(private http: HttpClient, private mission : Mission) { }



  PostMission(unemission){

    return this.http.post<Mission>(this.urlpostmission,unemission);

  }

  GetMission(){

    return this.http.get<Mission>(this.urlgetmission);

  }

}
