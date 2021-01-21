import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../components/newuser/user.model';

@Injectable({
  providedIn: 'any'})
export class RestService {

  public url="http://localhost:8080/test";
  public urlpostuser="http://localhost:8080/api/auth/singup";
  public urlgetuser="http://localhost:8080/listeUser";

  public urlgetuserConnecteByUsername="http://localhost:8080/listeUser";

 
  constructor(private http: HttpClient) {}

  getwelcomemessage(){
    return this.http.get<String>(this.url);
  }

  PostUser(user){
    return this.http.post<User>(this.urlpostuser,user);
  }

  GetUser(){
    return this.http.get<User>(this.urlgetuser);
  }

  getIDUserConnecte(username){
    return this.http.get<User>("http://localhost:8080/findidUserbyUsername/" + username);
  }

  getUserbyUsernameConnecte(username) {

    return this.http.get<User>("http://localhost:8080/findUserbyUsername/" + username);
  }
}
