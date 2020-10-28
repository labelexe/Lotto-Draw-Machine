import { TestBed, inject } from '@angular/core/testing';

import { LottoService } from './lotto.service';

describe('LottoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LottoService]
    });
  });

  it('should be created', inject([LottoService], (service: LottoService) => {
    expect(service).toBeTruthy();
  }));
});
