import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mission } from '../components/creation-mission/mission.model';



import { map } from 'rxjs/operators';

@Injectable({providedIn: 'any'}
)
export class MissionService {

  public urlpostmission="http://localhost:5001/newmission";

  public urlgetmission="http://localhost:5001/listeMission";

  public longlat:any=[]; 

  constructor(private http: HttpClient) { }



  PostMission(unemission){

    return this.http.post<Mission>(this.urlpostmission,unemission);

  }

  GetMission(){

    return this.http.get<Object>(this.urlgetmission);

  }

  getLongLat(adr) {
    
    return this.http.get ("https://api.mapbox.com/geocoding/v5/mapbox.places/"+adr+".json?types=address&access_token=pk.eyJ1IjoibWVoZGlzZWxsYW1pIiwiYSI6ImNrZ2t5bnQ3cTA2NDAyeW8xMzBoanVnMm8ifQ.UuXfzm__C3HRsGXfAktk3w")
    ;
    
    
    
    }




  }



