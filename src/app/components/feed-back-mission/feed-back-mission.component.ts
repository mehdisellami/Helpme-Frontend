import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { MissionService } from 'src/app/service/mission.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-feed-back-mission',
  templateUrl: './feed-back-mission.component.html',
  styleUrls: ['./feed-back-mission.component.css']
})
export class FeedBackMissionComponent implements OnInit {

  public historyMissionUserconnecte:any=[];
  public usernameConnecte :any;
  selectedValue: any;
  idMission: any;
  missionrecup: any =[];
  d:any;

  constructor(private missionservice :MissionService,  private tokenStorage: TokenStorageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.usernameConnecte=this.tokenStorage.getUsername();
    this. getUserMissionHistory(this.usernameConnecte);
    this.idMission=this.route.snapshot.paramMap.get('idMission');
    this.recupMission(this.idMission);
  }

  recupMission(id){
    this.missionservice.RecupMission(id).subscribe(
      (data)=>{
        this.missionrecup=data;
        console.log(this.missionservice);
        },
    );
  }

  getUserMissionHistory(m){
    this.missionservice.getUserMissionHistory(m).subscribe(
      (data )=>{
        this.historyMissionUserconnecte=data;
        console.log(this.historyMissionUserconnecte);
      },
    );
  }

  MissionRatingStars(note)
  {
    this.missionservice.MissionRating(note,this.missionrecup).subscribe(
      (data)=>{
        alert("Merci pour votre Avis !");
        window.open("/app-profil","_self");
      return data;
    },
    (err)=>{alert("ERROR" + " " + note + " " + this.missionrecup.commentaire);}
    );
  }
}