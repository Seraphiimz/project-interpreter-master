import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import {from, Observable } from 'rxjs';
import{Interpreter_user} from "../shared/model/interpreter_user";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterpreterFirestoreService {
  private interpretersCollection: AngularFirestoreCollection<Interpreter_user>;

  colecaoInterprete: AngularFirestoreCollection<Interpreter_user>;
  NOME_COLECAO = 'interpretes';

  constructor(private firestore: AngularFirestore) {
    this.interpretersCollection = this.firestore.collection<Interpreter_user>('interpreters');
  }
  listar(): Observable<Interpreter_user[]> {
    // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
    return this.colecaoInterprete.valueChanges({idField: 'id'});
  }
  remover(id: string): Observable<void> {
    return from(this.colecaoInterprete.doc(id).delete());
  }




