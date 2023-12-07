import { TestBed } from '@angular/core/testing';

import { InterpreterFirestoreService } from './interpreter-firestore.service';

describe('InterpreterFirestoreService', () => {
  let service: InterpreterFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterpreterFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
