import { TestBed } from '@angular/core/testing';

import { Langchain } from './langchain';

describe('Langchain', () => {
  let service: Langchain;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Langchain);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
