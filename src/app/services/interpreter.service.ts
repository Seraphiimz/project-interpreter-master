import { Injectable } from '@angular/core';
import {Interpreter_user} from "../shared/model/interpreter_user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterpreterService {
  INTERPRETER_URL = "http://localhost:3000/interprete";

  constructor(private httpClient: HttpClient) { }

  remover(interpr: Interpreter_user): Observable<Interpreter_user>{
    return this.httpClient.delete<Interpreter_user>(`${this.INTERPRETER_URL}/${interpr.id}`);
  }
  cadastrar_interpreter(interpr: Interpreter_user): Observable<Interpreter_user>{
    console.log(interpr)
    return this.httpClient.post<Interpreter_user>(this.INTERPRETER_URL, interpr);
  }

  pesquisar_Matricula_Interpreter(matricula: string): Observable<Interpreter_user[]>{
    return this.httpClient.get<Interpreter_user[]>(`${this.INTERPRETER_URL}?matricula=${matricula}`);
  }

  pesquisarPorId(id: string): Observable<Interpreter_user> {
    return this.httpClient.get<Interpreter_user>(`${this.INTERPRETER_URL}/${id}`);
  }

  listas_interpreter(): Observable<Interpreter_user[]>{
    return this.httpClient.get<Interpreter_user[]>(this.INTERPRETER_URL);
  }
}
