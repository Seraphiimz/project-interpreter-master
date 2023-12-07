import { Component } from '@angular/core';
import {Interpreter_user} from "./shared/model/interpreter_user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-interpreter';
  interpreter_user: Interpreter_user;
  interpreters_user: Array<Interpreter_user>;

  constructor() {
    this.interpreter_user = new Interpreter_user('','','','','',0);
    this.interpreters_user = new Array<Interpreter_user>();
  }

  inserirInterpreter_user(): void {
    this.interpreter_user = new Interpreter_user('','','','','',0);
    this.interpreters_user.push(this.interpreter_user);
  }
}
