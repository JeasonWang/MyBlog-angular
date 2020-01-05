import { TestBed } from '@angular/core/testing';

import { ForeBaseService } from './fore-base.service';

describe('ForeBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForeBaseService = TestBed.get(ForeBaseService);
    expect(service).toBeTruthy();
  });
});
