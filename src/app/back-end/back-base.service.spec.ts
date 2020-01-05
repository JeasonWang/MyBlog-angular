import { TestBed } from '@angular/core/testing';

import { BackBaseService } from './back-base.service';

describe('BackBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackBaseService = TestBed.get(BackBaseService);
    expect(service).toBeTruthy();
  });
});
