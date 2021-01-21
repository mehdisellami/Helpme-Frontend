import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mission } from '../components/creation-mission/mission.model';

import { map } from 'rxjs/operators';

@Injectable({providedIn: 'any'})
export class MissionService {

  public urlpostmission="http://localhost:8080/newmission";
  public urlgetmission="http://localhost:8080/listeMission";
  public urlgetmissionenAttentePourMap="http://localhost:8080/listeMissionEnAttente";
  public longlat:any=[]; 

  constructor(private http: HttpClient){}

  PostMission(unemission){
    return this.http.post<Mission>(this.urlpostmission,unemission);
  }

  GetMission(){
    return this.http.get<Object>(this.urlgetmission);
  }

  GetMissionenAttente(){
    return this.http.get<Object>(this.urlgetmissionenAttentePourMap);
  }


  DeleteMission(idmission){
    return this.http.delete("http://localhost:8080/deletemission/" + idmission);
  }

  getLongLat(adr) {
    return this.http.get ("https://api.mapbox.com/geocoding/v5/mapbox.places/"+adr+".json?proximity=-122.3995752,37.7881856&access_token=pk.eyJ1IjoibWVoZGlzZWxsYW1pIiwiYSI6ImNrZ2t5bnQ3cTA2NDAyeW8xMzBoanVnMm8ifQ.UuXfzm__C3HRsGXfAktk3w");
  }

  apiWalkinggMapbox(lngA,latA,lngB,latB) {   
    return this.http.get ("https://api.mapbox.com/directions/v5/mapbox/walking/"+lngA+","+latA+";"+lngB+","+latB+"?approaches=unrestricted;curb&access_token=pk.eyJ1IjoibWVoZGlzZWxsYW1pIiwiYSI6ImNrZ2t5bnQ3cTA2NDAyeW8xMzBoanVnMm8ifQ.UuXfzm__C3HRsGXfAktk3w")
    ;
  }



 affecterUserMissionPUT(i,j,user){


  return this.http.put("http://localhost:8080/affecterUserMission/"+i+"/"+j,user);
 }

 getUserMissionHistory(usernameUsertoFindHistoryMission){

  return this.http.get<Mission>("http://localhost:8080/findUserMissionHistory/" + usernameUsertoFindHistoryMission);

 }

 MissionRating(i,j,user){


  return this.http.put("http://localhost:8080/feedBackMission/"+i+"/"+j,user);
 }


}




