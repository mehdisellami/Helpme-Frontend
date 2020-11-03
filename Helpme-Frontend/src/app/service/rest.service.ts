import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public url="http://localhost:5001/test";
<<<<<<< HEAD


  public urlpostuser="http://localhost:5001/newuser";

  public urlgetuser="http://localhost:5001/listeUser";


 

  constructor(private http: HttpClient,public User : User) {
    
   


=======
  constructor(private http: HttpClient) {
>>>>>>> 9a16a6e1ae977c26e8fcc5ab011ea347d52e84c8
  }
  getwelcomemessage(){
    return this.http.get<Object>(this.url);
  }


  PostUser(user){

    return this.http.post<User>(this.urlpostuser,user);

  }

  GetUser(){

    return this.http.get<User>(this.urlgetuser);

  }

}
