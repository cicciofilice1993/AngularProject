import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonInterfaceComponent } from './button-interface/button-interface.component';
import { ConcreteButtonComponent } from './concrete-button/concrete-button.component';
import {FormsModule} from '@angular/forms';
import { TableInterfaceComponent } from './table-interface/table-interface.component';
import { ConcreteTableComponent } from './concrete-table/concrete-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonInterfaceComponent,
    ConcreteButtonComponent,
    TableInterfaceComponent,
    ConcreteTableComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
