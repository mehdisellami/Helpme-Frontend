import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { RestService } from 'src/app/service/rest.service';
import { User } from '../newuser/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  public user:any=[];
  public userbyusername:any=[];
  public usernameConnecte;
  profilInstance: User = new User();

  constructor(public restservice : RestService , private tokenStorage: TokenStorageService) { }

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
}
