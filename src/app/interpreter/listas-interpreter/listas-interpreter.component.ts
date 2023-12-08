import { Component } from '@angular/core';
import {Interpreter_user} from "../../shared/model/interpreter_user";
import {InterpreterService} from "../../services/interpreter.service";
import {InterpreterFirestoreService} from "../../services/interpreter-firestore.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";


@Component({
  selector: 'app-listas-interpreter',
  templateUrl: './listas-interpreter.component.html',
  styleUrls: ['./listas-interpreter.component.css']
})
export class ListasInterpreterComponent {
  interpretes: Interpreter_user[] = [];
  matricula_interpreter: string = "";
  pesquisados_interpreter: Interpreter_user[] = [];
  interpretess: Observable<Interpreter_user[]>;



  constructor(
    private roteador: Router,
    private interpreteService: InterpreterFirestoreService,
    private dialog: MatDialog){
    this.interpretess = interpreteService.listar();
  }

  excluir(interpreteRemover: Interpreter_user): void{
    if(interpreteRemover.id){
      this.interpreteService.remover(interpreteRemover.id).subscribe(
      );
    }
  }

  // pesquisar_interpreter() {
  //   this.interpreteService.pesquisarPorId(this.matricula_interpreter).subscribe(interpretes => {
  //     this.pesquisados_interpreter = interpretes;
  //   });
  // }
  ngOnInit(){
    this.interpreteService.listar().subscribe(interpretesRetornados => {
      this.interpretes = interpretesRetornados;
    });
  }
  editar(id: string): void {
    console.log('id');
    console.log(id);
    this.roteador.navigate(['edicao-interpreter', id]);
  }
}
