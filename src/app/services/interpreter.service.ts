import { Injectable } from '@angular/core';
import {Interpreter_user} from "../shared/model/interpreter_user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterpreterService {
  INTERPRETER_API = "http://localhost:3000/interprete";

  constructor(private httpClient: HttpClient) { }

  remover(interpr: Interpreter_user): Observable<Interpreter_user>{
    return this.httpClient.delete<Interpreter_user>(`${this.INTERPRETER_API}/${interpr.id}`);
  }
  cadastrar_interpreter(interpr: Interpreter_user): Observable<Interpreter_user>{
    console.log(interpr)
    return this.httpClient.post<Interpreter_user>(this.INTERPRETER_API, interpr);
  }

  pesquisar_Matricula_Interpreter(matricula: string): Observable<Interpreter_user[]>{
    return this.httpClient.get<Interpreter_user[]>(`${this.INTERPRETER_API}?matricula=${matricula}`);
  }

  pesquisarPorId(id: string): Observable<Interpreter_user> {
    return this.httpClient.get<Interpreter_user>(`${this.INTERPRETER_API}/${id}`);
  }

  listas_interpreter(): Observable<Interpreter_user[]>{
    return this.httpClient.get<Interpreter_user[]>(this.INTERPRETER_API);
  }
}
