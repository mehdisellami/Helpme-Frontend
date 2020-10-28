import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  CheckedBx=false;

  click(ev){
    this.CheckedBx=true;
 }
  

  constructor() { }

  ngOnInit(): void {
  }

}
