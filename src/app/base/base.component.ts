import { Component, OnInit, Input } from '@angular/core';
import { AdItem } from '../ad-item';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  @Input() components: AdItem[];
  constructor() { }

  ngOnInit() {
    this.components= this.components.ge
  }

}
