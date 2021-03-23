import { Component, OnInit } from '@angular/core';
import { RestService } from './service/rest.service';
import { TokenStorageService } from './auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Helpme-Frontend';
  public msg:any;
  titleMap = 'Prêt pour vos prochaines missions ?';


  lat = 51.678418;
  lng = 7.809007;

  private roles: string[];
  private authority: string;

  isLoggedIn = false;

  constructor(public restservice :RestService,private tokenStorage: TokenStorageService) {
  }

  ngOnInit(){
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
}

deconnexion() {
  this.tokenStorage.signOut();
  this.isLoggedIn=false;
  window.location.replace("login");  
  }

}
