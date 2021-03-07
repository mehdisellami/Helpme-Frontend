import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentaire-mission',
  templateUrl: './commentaire-mission.component.html',
  styleUrls: ['./commentaire-mission.component.css']
})
export class CommentaireMissionComponent implements OnInit {

  selectedValue1 =  <any> {};

  selectedValue2 :  any;

  constructor() { }

  ngOnInit(): void {
  }

}
