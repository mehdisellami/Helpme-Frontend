import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../components/newuser/user.model';

@Injectable({
  providedIn: 'any'})
export class RestService {

  public urlgetuserConnecteByUsername="http://localhost:8080/listeUser";
 
  constructor(private http: HttpClient) {}

  getwelcomemessage(){
    return this.http.get<String>("http://localhost:8080/test");
  }

  PostUser(user){
    return this.http.post<User>("http://localhost:8080/api/auth/singup",user);
  }

  GetUser(){
    return this.http.get<User>("http://localhost:8080/listeUser");
  }

  getIDUserConnecte(username){
    return this.http.get<User>("http://localhost:8080/findidUserbyUsername/" + username);
  }

  getUserbyUsernameConnecte(username) {

    return this.http.get<User>("http://localhost:8080/findUserbyUsername/" + username);
  }
}
