import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public url="http://localhost:5001/test";

 

  constructor(private http: HttpClient) {
    
   


  }
  getwelcomemessage()  {
    
    return this.http.get<String>(this.url)  ;
    
    
  }

}
