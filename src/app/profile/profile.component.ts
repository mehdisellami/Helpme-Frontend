import { Component, OnInit } from '@angular/core';
import { User } from '../newuser/user.model';
import {RestService} from "../service/rest.service";
import {MissionService} from "../service/mission.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user:any=[];
  public mission:any=[];

  profileInstance: User = new User();
  constructor(public missionservice :MissionService, public restservice : RestService) { }


  ngOnInit(): void {
  }


  getUser() {
    this.restservice.GetUser().subscribe(
      (data) => {
        this.user = data;

        console.log(this.user);

      },
    );
  }

  getMission(){
    this.missionservice.GetMission().subscribe(
      (data )=>{
        this.mission=data;
        console.log(this.mission);
      },
    );
  }
}


