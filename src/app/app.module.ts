/*
* File: app.module.ts
* Author: Baráth Dávid
* Copyright: 2023, Baráth Dávid
* Group: Szoft 2/N
* Date: 2022-02-07
* Github: https://github.com/david587/
* Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HengerComponent } from './henger/henger.component';
import { AboutComponent } from './about/about.component';
import { GitComponent } from './git/git.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HengerComponent,
    AboutComponent,
    GitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
