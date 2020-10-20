import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';
import { RestService } from './service/rest.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  faCoffee = faCoffee;
  title = 'Helpme-Frontend';
  public msg:any;



  constructor(public restservice :RestService) { 

    
  }
  ngOnInit(){

    this.getEquipe();

  }


  getEquipe(){
    this.restservice.getwelcomemessage().subscribe(
      (data )=>{
        this.msg=data;
        
        console.log(data);
     
        },
        
        

      

    );
 

    


  }

  
}
