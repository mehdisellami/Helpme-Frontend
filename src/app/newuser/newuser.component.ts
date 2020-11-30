import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';
import { User } from './user.model';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  userInstance: User = new User();

  constructor(private userService:RestService) { }

  ngOnInit(): void {
  }



  
  btnaddUser():void{

    this.userService.PostUser(this.userInstance)
    .subscribe( data => {
      alert("Utilisateur  Ajouté ");
      return this.userInstance=data;
    },
    (err)=>{
     
    }
    );
    
}

}
