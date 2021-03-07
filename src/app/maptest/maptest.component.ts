import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-maptest',
  templateUrl: './maptest.component.html',
  styleUrls: ['./maptest.component.css']
})
export class MaptestComponent implements OnInit {

  map: mapboxgl.Map;

  constructor() { }

  ngOnInit(): void {

    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('pk.eyJ1IjoibWVoZGlzZWxsYW1pIiwiYSI6ImNrZ2t5bnQ3cTA2NDAyeW8xMzBoanVnMm8ifQ.UuXfzm__C3HRsGXfAktk3w');

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [2.390055, 48.8077584],
      zoom: 16.6

    });

    var popup = new mapboxgl.Popup({ offset: 25 }).setText(
      'Construction on the Washington Monument began in 1848.'
      );


    var marker = new mapboxgl.Marker({
      draggable: false
    })
      .setLngLat([2.390055, 48.8077584])
      .setPopup(popup)
      .addTo(this.map);


     
  }

  


}
