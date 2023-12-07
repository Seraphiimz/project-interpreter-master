import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasInterpreterComponent } from './listas-interpreter.component';

describe('ListasInterpreterComponent', () => {
  let component: ListasInterpreterComponent;
  let fixture: ComponentFixture<ListasInterpreterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasInterpreterComponent]
    });
    fixture = TestBed.createComponent(ListasInterpreterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
