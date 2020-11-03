import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mission } from '../components/creation-mission/mission.model';






@Injectable({providedIn: 'any'}
)
export class MissionService {

  public urlpostmission="http://localhost:5001/newmission";

  public urlgetmission="http://localhost:5001/listeMission";

  constructor(private http: HttpClient) { }



  PostMission(unemission){

    return this.http.post<Mission>(this.urlpostmission,unemission);

  }

  GetMission(){

    return this.http.get<Object>(this.urlgetmission);

  }

}
