import { Injectable } from '@angular/core';
import {from, Observable } from 'rxjs';
import{Interpreter_user} from "../shared/model/interpreter_user";
import {map} from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentChangeAction
}from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class InterpreterFirestoreService {
  private interpretersCollection!: AngularFirestoreCollection<Interpreter_user>;

  colecaoInterprete!: AngularFirestoreCollection<Interpreter_user>;
  NOME_COLECAO = 'interpretes';

  constructor(private firestore: AngularFirestore) {
    this.interpretersCollection = this.firestore.collection<Interpreter_user>('interpreters');
  }
  listar(): Observable<Interpreter_user[]> {
    // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
    return this.colecaoInterprete.valueChanges({idField: 'id'});
  }
  inserir(interprete: Interpreter_user): Observable<object> {
    // removendo id pois ele está undefined, já que um novo usuário
    if(interprete.id){delete interprete.id}
    // Object.assign({}, usuario) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
    // o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
    return from(this.colecaoInterprete.add(Object.assign({}, interprete)));
  }

  remover(id: string): Observable<void> {
    return from(this.colecaoInterprete.doc(id).delete());
  }
}
