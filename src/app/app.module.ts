import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
