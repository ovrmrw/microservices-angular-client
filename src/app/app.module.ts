import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AuthModule } from '../lib/auth';
import { DisposerModule } from '../lib/disposer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    DisposerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
