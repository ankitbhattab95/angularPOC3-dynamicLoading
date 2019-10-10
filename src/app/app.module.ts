import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';
import { TimeComponent } from './time/time.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TextboxComponent } from './textbox/textbox.component';
import { ButtonComponent } from './button/button.component';
import { DividerComponent } from './divider/divider.component';
import { MaskComponent } from './mask/mask.component';
import { CustomDirective } from './custom.directive';
import { BaseComponent } from './base/base.component';
import {ComponentService} from './component.service';
import { HeadersComponent } from './headers/headers.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  entryComponents: [ 
    TableComponent,
    HomeComponent,
    FooterComponent,
    TimeComponent,
    DropdownComponent,
    SpinnerComponent,
    TextboxComponent,
    HeadersComponent,
    ButtonComponent,
    DividerComponent,
    MaskComponent ],
  declarations: [
    AppComponent,
   
    TableComponent,
    FooterComponent,
    TimeComponent,
    DropdownComponent,
    SpinnerComponent,
    TextboxComponent,
    ButtonComponent,
    DividerComponent,
    MaskComponent,
    CustomDirective,
    BaseComponent,
    HeadersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
