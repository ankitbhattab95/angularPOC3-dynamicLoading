import { Component, OnInit } from '@angular/core';
import {AdItem} from './ad-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  components:AdItem[];
  title = 'angularPOC3';
  constructor(){}




  ngOnInit() {
   
  }

}
