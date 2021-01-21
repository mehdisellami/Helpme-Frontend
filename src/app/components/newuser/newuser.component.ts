import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { SignUpInfo } from '../../auth/signup-info';
import { RestService } from '../../service/rest.service';
import { User } from './user.model';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  
  selectedValue =  <any> {};
  userInstance: User = new User();

  constructor(private userService:RestService,private authService: AuthService ) { }

  ngOnInit(): void {}
  
  btnaddUser():void{
    this.userService.PostUser(this.userInstance)
    .subscribe( data => {
      alert("Utilisateur ajouté");
      return this.userInstance=data;
    },
    (err)=>{}
    );
  }

  onSubmit() {
    this.signupInfo = new SignUpInfo(
      this.userInstance.name,
      this.userInstance.username,
      this.userInstance.email,
      this.userInstance.password,
      this.userInstance.tel 
    );

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        const type = 'success';
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
