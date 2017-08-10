import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './routing/routing.module';
import { routingComponents } from './routing/routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, routingComponents
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
