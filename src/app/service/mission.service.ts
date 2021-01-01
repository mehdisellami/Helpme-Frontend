import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mission } from '../components/creation-mission/mission.model';



import { map } from 'rxjs/operators';

@Injectable({providedIn: 'any'}
)
export class MissionService {

  public urlpostmission="https://helpmebackend.herokuapp.com/newmission";

  public urlgetmission="https://helpmebackend.herokuapp.com/listeMission";

  public longlat:any=[]; 

  constructor(private http: HttpClient) { }



  PostMission(unemission){

    return this.http.post<Mission>(this.urlpostmission,unemission);

  }

  GetMission(){

    return this.http.get<Object>(this.urlgetmission);

  }

  getLongLat(adr) {
    
    return this.http.get ("https://api.mapbox.com/geocoding/v5/mapbox.places/"+adr+".json?proximity=-122.3995752,37.7881856&access_token=pk.eyJ1IjoibWVoZGlzZWxsYW1pIiwiYSI6ImNrZ2t5bnQ3cTA2NDAyeW8xMzBoanVnMm8ifQ.UuXfzm__C3HRsGXfAktk3w")
    ;
    
    
    
    }




  }




