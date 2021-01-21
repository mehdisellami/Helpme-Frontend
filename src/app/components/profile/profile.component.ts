import { Component, OnInit } from '@angular/core';
import { User } from '../newuser/user.model';
<<<<<<< HEAD:src/app/profile/profile.component.ts
import {RestService} from "../service/rest.service";
import {MissionService} from "../service/mission.service";
import { TokenStorageService } from '../auth/token-storage.service';
=======
import {RestService} from "../../service/rest.service";
import {MissionService} from "../../service/mission.service";
>>>>>>> d0c04ea78d80b076a368579c42eb845fef2759e7:src/app/components/profile/profile.component.ts


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user:any=[];

  public userbyusername:any=[];
  public mission:any=[];

  public usernameConnecte;

  profileInstance: User = new User();
  constructor(public missionservice :MissionService, public restservice : RestService , private tokenStorage: TokenStorageService) { }


  ngOnInit(): void {
    
   this.usernameConnecte=this.tokenStorage.getUsername();
  this.getUserbyUsername(this.usernameConnecte);
  }


  getUser() {
    this.restservice.GetUser().subscribe(
      (data) => {
        this.user = data;

        console.log(this.user);

      },
    );
  }

  getUserbyUsername(m) {
    this.restservice.getUserbyUsernameConnecte(m).subscribe(
      (data) => {
        this.userbyusername = data;

        console.log(this.userbyusername);

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


