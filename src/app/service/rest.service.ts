import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../components/newuser/user.model';

@Injectable({
  providedIn: 'any'})
export class RestService {

  public url="https://helpmebackend.herokuapp.com/test";
  public urlpostuser="https://helpmebackend.herokuapp.com/api/auth/singup";
  public urlgetuser="https://helpmebackend.herokuapp.com/listeUser";

  public urlgetuserConnecteByUsername="https://helpmebackend.herokuapp.com/listeUser";

 
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

  getUserConnecte(username){
    return this.http.get<User>("https://helpmebackend.herokuapp.com/findidUserbyUsername/" + username);
  }

  getUserbyUsernameConnecte(username) {

    return this.http.get<User>("https://helpmebackend.herokuapp.com/findUserbyUsername/" + username);
  }
}
