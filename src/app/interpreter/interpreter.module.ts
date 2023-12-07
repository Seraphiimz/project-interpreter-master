import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CadastroInterpreterComponent} from "./cadastro-interpreter/cadastro-interpreter.component";
import {ListasInterpreterComponent} from "./listas-interpreter/listas-interpreter.component";
import {PipesModule} from "../shared/pipes/pipes.module";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PrincpalComponent } from './princpal/princpal.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatRadioModule} from "@angular/material/radio";
import {MatChipsModule} from "@angular/material/chips";



@NgModule({
  declarations: [
    CadastroInterpreterComponent,
    ListasInterpreterComponent,
    PrincpalComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatRadioModule,
    MatChipsModule,

  ],
  exports:[
    CadastroInterpreterComponent,
    ListasInterpreterComponent,
    PrincpalComponent
  ]
})
export class InterpreterModule { }
