import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ComponentService {
component:any
hold:string;
  constructor() { }

//  getComponent(event){
//    switch (event.originalTarget.innerHTML) {
//      case "Header":
//        this.component = HeaderComponent;
//        break;
//       }
//       console.log("hiiiiii")
//  }
 drag(ev) {
   console.log('drag')
   console.log(ev.originalTarget.innerText);
  this.hold =ev.originalTarget.innerText;
  ev.dataTransfer.setData("text", ev.target.id);
}



}
