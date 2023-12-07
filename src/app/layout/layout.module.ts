import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    RouterLink
  ],
  exports: [
    MenuComponent
  ]
})
export class LayoutModule { }
