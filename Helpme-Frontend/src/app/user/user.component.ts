import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userInstance: User = new User();

  constructor(public restservice :RestService) { }

  ngOnInit(): void {

    this.btnadd();

  }


  btnadd():void{

    this.restservice.PostUser(this.userInstance)
    .subscribe( data => {
      alert("utilisateur Ajouté ");
      return data;
    },
    (err)=>{
      console.log(err);
    }
    );
    







  }





}
