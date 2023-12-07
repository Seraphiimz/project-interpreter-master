export class Interpreter_user{

  id?: string
  nome: string
  matricula: string
  email: string
  turno: string
  telefone: number

  constructor(id: string, nome: string,  matricula: string,  email: string,turno: string,  telefone: number){

    this.id = id;
    this.nome = nome;
    this.matricula = matricula;
    this.email = email;
    this.turno = turno
    this.telefone = telefone;
  }
}
