import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroInterpreterComponent} from "./interpreter/cadastro-interpreter/cadastro-interpreter.component";
import {ListasInterpreterComponent} from "./interpreter/listas-interpreter/listas-interpreter.component";
import {PrincpalComponent} from "./interpreter/princpal/princpal.component";

const routes: Routes = [
  {
    path: "listagem-interpreter",
    component: ListasInterpreterComponent
  },
  {
    path: "cadastro-interpreter",
    component: CadastroInterpreterComponent
  },
  {
    path: "principal",
    component: PrincpalComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
