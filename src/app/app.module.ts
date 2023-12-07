import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {InterpreterModule} from "./interpreter/interpreter.module";
import {LayoutModule} from "./layout/layout.module";
import {PipesModule} from "./shared/pipes/pipes.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app.routing.module";
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    LayoutModule,
    InterpreterModule,
    PipesModule,
    BrowserAnimationsModule,
    RouterOutlet,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
