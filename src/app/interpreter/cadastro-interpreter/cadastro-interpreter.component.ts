import { Component } from '@angular/core';
import {Interpreter_user} from "../../shared/model/interpreter_user";
import {InterpreterFirestoreService} from "../../services/interpreter-firestore.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-cadastro-interpreter',
  templateUrl: './cadastro-interpreter.component.html',
  styleUrls: ['./cadastro-interpreter.component.css']
})
export class CadastroInterpreterComponent {

  interpreteDeCadastros: Interpreter_user;
  estahCadastrando = true;
  nomeBotaoCadastro = 'Cadastrar';

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router,
              private usuarioService: InterpreterFirestoreService,) {
    this.interpreteDeCadastros = new Interpreter_user();
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      // editando
      this.usuarioService.pesquisarPorId(idParaEdicao).subscribe(
          usuarioRetornado => {
            this.interpreteDeCadastros = usuarioRetornado;
            this.estahCadastrando = false;
            this.nomeBotaoCadastro = 'Salvar';
          }
      );
    } else {
      this.nomeBotaoCadastro = 'Cadastrar';
    }
  }

  manter(): void {
    if (this.estahCadastrando && this.interpreteDeCadastros) {
      this.usuarioService.inserir(this.interpreteDeCadastros).subscribe(
      );
    } else {
      this.usuarioService.atualizar(this.interpreteDeCadastros).subscribe(
      );
    }
    this.interpreteDeCadastros = new Interpreter_user();
  }


  protected readonly Interpreter_user = Interpreter_user;
}
