
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {CadastroInterpreterComponent} from "../cadastro-interpreter/cadastro-interpreter.component";
import {ListasInterpreterComponent} from "../listas-interpreter/listas-interpreter.component";
import {Interpreter_user} from "../../shared/model/interpreter_user";
import {InterpreterService} from "../../services/interpreter.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-princpal',
  templateUrl: './princpal.component.html',
  styleUrls: ['./princpal.component.css']
})

export class PrincpalComponent {
  interpretes: Interpreter_user[] = [];
  matricula_interpreter: string = "";
  pesquisados_interpreter: Interpreter_user[] = [];


  constructor(
    private interprete_service: InterpreterService,
    private roteador: Router,
    private dialog: MatDialog){}

  remover(interprete_remover: Interpreter_user): void {
    this.interprete_service.remover(interprete_remover).subscribe( interpreteRemover => {
        console.log('Interprete removido');
        const indxARemover = this.interpretes.findIndex(interpreter =>
          interpreter.matricula === interpreteRemover.matricula);

        if (indxARemover >= 0) {
          this.interpretes.splice(indxARemover, 1);
        }
      }
    );
  }
  openCadastroModal(): void {
    const dialogRef = this.dialog.open(CadastroInterpreterComponent, {
      width: '500px', height: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal fechado');
    });
  }
  abrirModal(): void {
    this.dialog.open(ListasInterpreterComponent, {
      width: '400px',
    });

  }
}



