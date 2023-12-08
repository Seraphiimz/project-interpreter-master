export class Interpreter_user{

  id?: string
  nome?: string
  matricula?: string
  email?: string
  turno?: string
  telefone?: number

  constructor(id?: string, interpreter_user: Interpreter_user={}){

    this.id = id;
    this.nome = interpreter_user.nome;
    this.matricula = interpreter_user.matricula;
    this.email = interpreter_user.email;
    this.turno = interpreter_user.turno;
    this.telefone = interpreter_user.telefone;
  }
}
