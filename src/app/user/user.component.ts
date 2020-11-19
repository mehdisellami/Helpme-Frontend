import { Component, OnInit } from '@angular/core';
import { MissionService } from '../service/mission.service';
import { RestService } from '../service/rest.service';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public mission:any=[];

  userInstance: User = new User();

  constructor(public missionservice :MissionService , public restservice : RestService) { }

  ngOnInit(): void {

   
    this.getUser();

  }


  btnadd():void{

    this.restservice.PostUser(this.userInstance)
    .subscribe( data => {
      alert("utilisateur Ajouté ");
      return data;
    },
    (err)=>{
    }
    );
    
  }


  getUser(){
    this.missionservice.GetMission().subscribe(
      (data )=>{
        this.mission=data;

        console.log(this.mission);

        },

    );
  }


}
