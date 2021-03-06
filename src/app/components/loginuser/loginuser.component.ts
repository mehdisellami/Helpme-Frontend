import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthLoginInfo } from 'src/app/auth/login-info';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];


  userIDconnecte:any=[];

  tokenUsername :any;

  usernameForm : any;
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,public restservice :RestService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
     
    }
    this.usernameForm=this.tokenStorage.getUsername();
  }
  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();

        this.tokenUsername=this.tokenStorage.getUsername();
        
        this.getUserIdbyUsername(this.tokenUsername);
       this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.replace("login");  
    }



  getUserIdbyUsername(m){
    this.restservice.getIDUserConnecte(m).subscribe(
      (data )=>{
        this.userIDconnecte=data;
        console.log(this.userIDconnecte);
        },
    );
  }




}

