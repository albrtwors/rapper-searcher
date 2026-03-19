import { TestBed } from '@angular/core/testing';

import { LangChain } from './lang-chain';

describe('LangChain', () => {
  let service: LangChain;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangChain);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
