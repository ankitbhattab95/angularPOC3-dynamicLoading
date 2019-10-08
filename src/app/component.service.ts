import { Injectable } from '@angular/core';
import { AdItem }               from './ad-item';
import { ButtonComponent } from './button/button.component';
import { DividerComponent } from './divider/divider.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FooterComponent } from './footer/footer.component';
import { headersToString } from 'selenium-webdriver/http';
import { HeaderComponent } from './header/header.component';
import { MaskComponent } from './mask/mask.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TableComponent } from './table/table.component';
import { TextboxComponent } from './textbox/textbox.component';
import { TimeComponent } from './time/time.component';


@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor() { }

  getComponents(){
    return[new AdItem (ButtonComponent),
           new AdItem (DividerComponent),
           new AdItem (DropdownComponent),
           new AdItem (FooterComponent),
           new AdItem (HeaderComponent),
           new AdItem (MaskComponent),
           new AdItem (SpinnerComponent),
           new AdItem (TableComponent),
           new AdItem (TextboxComponent),
           new AdItem (TimeComponent),
    ]
  }
}
