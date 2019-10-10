import { Component, OnInit, Input,ViewChild, ComponentFactoryResolver} from '@angular/core';
// import { AdItem } from '../ad-item';
import {ComponentService} from '../component.service'
import { ButtonComponent } from '../button/button.component';
// import { HeaderComponent } from '../Header/header.component';
import { DividerComponent } from '../divider/divider.component';


import {CustomDirective} from '../custom.directive'
import { TableComponent } from '../table/table.component';
import { FooterComponent } from '../footer/footer.component';
import { TimeComponent } from '../time/time.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { MaskComponent } from '../mask/mask.component';
import {HeadersComponent} from '../headers/headers.component'
import { TextboxComponent } from '../textbox/textbox.component';
import {HomeComponent} from '../home/home.component'
import { getLocaleMonthNames } from '@angular/common';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  @ViewChild(CustomDirective, {static: true}) custom: CustomDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, public componentService: ComponentService) { }
 

  ngOnInit() {
    this.onDragEnd(HomeComponent)
  }
  allowDrop(ev) {
    console.log('allowDrop')
    ev.preventDefault();
  }
  
  getHome(){

  }

  drop(ev) {   
    console.log('drop')
    
    switch (this.componentService.hold) {
        case "Header":
         this.componentService.component = HeadersComponent;
         break;
        case "Table":
         this.componentService.component = TableComponent;
         break;
        case "Footer":
         this.componentService.component = FooterComponent;
         break;
        case "Time":
         this.componentService.component = TimeComponent;
         break;
        case "Dropdown":
         this.componentService.component = DropdownComponent;
         break;
        case "Spinner":
         this.componentService.component = SpinnerComponent;
         break;
        case "Button":
         this.componentService.component = ButtonComponent;
         break;
        case "Divider":
         this.componentService.component = DividerComponent;
         break;
         case "Mask":
          this.componentService.component = MaskComponent;
          break;
        case "Textbox":
          this.componentService.component = TextboxComponent;
          break;
       }
  
       ev.preventDefault();
       this.onDragEnd(this.componentService.component); 
  }

  onDragEnd(comp) {
    //  console.log("ts")

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp);
    
    const viewContainerRef = this.custom.viewContainerRef; 
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }

}
