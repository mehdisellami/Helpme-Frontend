import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mission } from '../components/creation-mission/mission.model';

@Injectable({providedIn: 'any'})
export class MissionService {

  public longlat:any=[]; 

  constructor(private http: HttpClient){}

  PostMission(unemission){
    return this.http.post<Mission>("http://localhost:8080/newmission",unemission);
  }

  GetMission(){
    return this.http.get<Object>("http://localhost:8080/listeMission");
  }

  RecupMission(id){
    return this.http.get<Object>("http://localhost:8080/getmission/"+id);
  }

  GetMissionenAttente(){
    return this.http.get<Object>("http://localhost:8080/listeMissionEnAttente");
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
  apiDrivingMapbox(lngA,latA,lngB,latB) {
    return this.http.get ("https://api.mapbox.com/directions/v5/mapbox/driving/"+lngA+","+latA+";"+lngB+","+latB+"?approaches=unrestricted;curb&access_token=pk.eyJ1IjoibWVoZGlzZWxsYW1pIiwiYSI6ImNrZ2t5bnQ3cTA2NDAyeW8xMzBoanVnMm8ifQ.UuXfzm__C3HRsGXfAktk3w")
    ;
  }

  apiCyclingMapbox(lngA,latA,lngB,latB) {
    return this.http.get ("https://api.mapbox.com/directions/v5/mapbox/cycling/"+lngA+","+latA+";"+lngB+","+latB+"?approaches=unrestricted;curb&access_token=pk.eyJ1IjoibWVoZGlzZWxsYW1pIiwiYSI6ImNrZ2t5bnQ3cTA2NDAyeW8xMzBoanVnMm8ifQ.UuXfzm__C3HRsGXfAktk3w")
    ;
  }

  affecterUserMissionPUT(i,j,user){
    return this.http.put("http://localhost:8080/affecterUserMission/"+i+"/"+j,user);
  }

  getUserMissionHistory(usernameUsertoFindHistoryMission){
    return this.http.get<Mission>("http://localhost:8080/findUserMissionHistory/" + usernameUsertoFindHistoryMission);
  }

  MissionRating(notemission,mission){
    return this.http.put("http://localhost:8080/feedBackMission/" + notemission, mission);
  }

  EditMission(unemission){
    return this.http.post<Mission>("http://localhost:8080/editmission/",unemission);
  }

  Missionterminer(idmission){
    return this.http.put("http://localhost:8080/Missiontermine/" + idmission, idmission);
  }

  Annulerfin(idmission){
    return this.http.put("http://localhost:8080/annulerFinMission/" + idmission, idmission);
  }

}