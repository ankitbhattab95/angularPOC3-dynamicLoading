import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ComponentService {
component:any
hold:string;
  constructor() { }

 drag(ev) {
   console.log('drag')
   console.log(ev.originalTarget.innerText);
  this.hold =ev.originalTarget.innerText;
  ev.dataTransfer.setData("text", ev.target.id);
}



}
