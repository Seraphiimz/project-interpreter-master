import { Injectable } from '@angular/core';
import {Interpreter_user} from "../shared/model/interpreter_user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterpreterService {
  INTERPRETER_URL = 'http://localhost:3000/interprete';

  constructor(private httpClient: HttpClient) { }

  remover(interpr: Interpreter_user): Observable<Interpreter_user>{
    return this.httpClient.delete<Interpreter_user>(`${this.INTERPRETER_URL}/${interpr.id}`);
  }
  cadastrar(interpr: Interpreter_user): Observable<Interpreter_user>{
    console.log(interpr)
    return this.httpClient.post<Interpreter_user>(this.INTERPRETER_URL, interpr);
  }

  pesquisarMatricula(matricula: string): Observable<Interpreter_user[]>{
    return this.httpClient.get<Interpreter_user[]>(`${this.INTERPRETER_URL}?matricula=${matricula}`);
  }

  pesquisarPorId(id: string): Observable<Interpreter_user> {
    return this.httpClient.get<Interpreter_user>(`${this.INTERPRETER_URL}/${id}`);
  }

  listar(): Observable<Interpreter_user[]>{
    return this.httpClient.get<Interpreter_user[]>(this.INTERPRETER_URL);
  }

  inserir(interprete: Interpreter_user): Observable<Interpreter_user> {
    return this.httpClient.post<Interpreter_user>(this.INTERPRETER_URL, interprete);
  }
}
