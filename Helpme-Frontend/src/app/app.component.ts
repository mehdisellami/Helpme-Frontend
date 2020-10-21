import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';
import { RestService } from './service/rest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Helpme-Frontend';
  public msg:any;
  titleMap = 'Bonjour Thomas ! prêts pour vos prochaines missions? ';
  

  lat = 28.704060;
  long = 77.102493;
  googleMapType = 'satellite';
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
