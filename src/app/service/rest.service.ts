import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../components/newuser/user.model';

@Injectable({
  providedIn: 'any'})
export class RestService {

  public urlgetuserConnecteByUsername="https://helpmebackend.herokuapp.com/listeUser";
 
  constructor(private http: HttpClient) {}

  getwelcomemessage(){
    return this.http.get<string>("https://helpmebackend.herokuapp.com/test");
  }

  PostUser(user){
    return this.http.post<User>("https://helpmebackend.herokuapp.com/api/auth/singup",user);
  }

  GetUser(){
    return this.http.get<User>("https://helpmebackend.herokuapp.com/listeUser");
  }

  getIDUserConnecte(username){
    return this.http.get<User>("https://helpmebackend.herokuapp.com/findidUserbyUsername/" + username);
  }

  getUserbyUsernameConnecte(username) {

    return this.http.get<User>("https://helpmebackend.herokuapp.com/findUserbyUsername/" + username);
  }
}
