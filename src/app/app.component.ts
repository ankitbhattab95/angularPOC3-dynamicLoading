import { Component, OnInit } from '@angular/core';
import {AdItem} from './ad-item';
import {ComponentService} from './component.service'
import { CommentStmt } from '@angular/compiler';
// import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  components:AdItem[];
  title = 'angularPOC3';
  constructor(private ComponentService:ComponentService){}




  ngOnInit() {
    this.components=this.ComponentService.getComponents();
    console.log(this.components[0].component.name)
  }

}
