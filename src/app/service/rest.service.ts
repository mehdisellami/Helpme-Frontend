import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../newuser/user.model';






@Injectable({
  providedIn: 'any'})
export class RestService {

  public url="http://localhost:5001/test";


  public urlpostuser="http://localhost:5001/newuser";

  public urlgetuser="http://localhost:5001/listeUser";


 

  constructor(private http: HttpClient) {
    
  }
  getwelcomemessage(){
    return this.http.get<String>(this.url);
  }


  PostUser(user){

    return this.http.post<User>(this.urlpostuser,user);

  }

  GetUser(){

    return this.http.get<User>(this.urlgetuser);

  }

}
