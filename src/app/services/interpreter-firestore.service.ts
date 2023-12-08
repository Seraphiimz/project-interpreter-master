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

  colecaoInterprete: AngularFirestoreCollection<Interpreter_user>;
  NOME_COLECAO = 'interpretes';

  constructor(private firestore: AngularFirestore) {
    this.colecaoInterprete = this.firestore.collection(this.NOME_COLECAO);
  }
  listar(): Observable<Interpreter_user[]> {
    // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
    return this.colecaoInterprete.valueChanges({idField: 'id'});
  }

  pesquisarPorId(id: string): Observable<Interpreter_user> {
    // como o objeto retornado pelo get é um DocumentData, e não um usuário, transformamos a partir de um pipe e mapeamos de um document
    //  para o tipo usuário
    return this.colecaoInterprete.doc(id).get().pipe(map
    (document => new Interpreter_user(id, document.data())));
  }

  atualizar(interprete: Interpreter_user): Observable<void> {
    // removendo id pois não vamos guardar nos dados do documento, mas sim usar apenas como id para recuperar o documento
    const id = interprete.id;
    delete interprete.id;
    return from(this.colecaoInterprete.doc(id).update({...interprete}));
  }

  inserir(interprete: Interpreter_user): Observable<object> {
    // removendo id pois ele está undefined, já que um novo usuário
    delete interprete.id;
    // Object.assign({}, usuario) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
    // o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
    return from(this.colecaoInterprete.add({...interprete}));
  }

  remover(id: string): Observable<void> {
    return from(this.colecaoInterprete.doc(id).delete());
  }

}
