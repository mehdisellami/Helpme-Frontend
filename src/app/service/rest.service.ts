import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../newuser/user.model';

@Injectable({
  providedIn: 'any'})
export class RestService {

  public url="https://helpmebackend.herokuapp.com/test";

<<<<<<< HEAD

  public urlpostuser="https://helpmebackend.herokuapp.com/singup";
=======
  public urlpostuser="https://helpmebackend.herokuapp.com/newuser";
>>>>>>> 6a592a56bb9feaf2a125baad451c5e685651b0b9

  public urlgetuser="https://helpmebackend.herokuapp.com/listeUser";
 
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
