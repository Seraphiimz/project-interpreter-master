import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroInterpreterComponent } from './cadastro-interpreter.component';

describe('CadastroInterpreterComponent', () => {
  let component: CadastroInterpreterComponent;
  let fixture: ComponentFixture<CadastroInterpreterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroInterpreterComponent]
    });
    fixture = TestBed.createComponent(CadastroInterpreterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
