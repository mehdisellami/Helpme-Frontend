import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { MissionService } from 'src/app/service/mission.service';

@Component({
  selector: 'app-feed-back-mission',
  templateUrl: './feed-back-mission.component.html',
  styleUrls: ['./feed-back-mission.component.css']
})
export class FeedBackMissionComponent implements OnInit {

  public historyMissionUserconnecte:any=[];
  
  public usernameConnecte :any;

  selectedValue1 =  <any> {};

  selectedValue2 :  any;



  constructor(public missionservice :MissionService,  private tokenStorage: TokenStorageService ) { }

  ngOnInit(): void {
    this.usernameConnecte=this.tokenStorage.getUsername();
    this. getUserMissionHistory(this.usernameConnecte);
  }

  getUserMissionHistory(m){
    this.missionservice.getUserMissionHistory(m).subscribe(
      (data )=>{
        this.historyMissionUserconnecte=data;
        console.log(this.historyMissionUserconnecte);
      },
    );
  }

  MissionRatingStars(i,j,user)
  {
    this.missionservice.MissionRating(i,j,user).subscribe(
      (data)=>{
        const type = 'success';
        alert("Merci pour votre Avis !")
      return data;
    },
    (err)=>{
      alert("ERROR");
     
    }
  );
  
    
  }
}
