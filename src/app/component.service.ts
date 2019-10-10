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
  //  console.log(ev.target);
  this.hold =ev.target.textContent;
  ev.dataTransfer.setData("text", ev.target.id);
}



}
