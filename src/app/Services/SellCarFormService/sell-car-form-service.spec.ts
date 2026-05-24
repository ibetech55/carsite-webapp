import { TestBed } from '@angular/core/testing';

import { SellCarFormService } from './sell-car-form-service';

describe('SellCarFormService', () => {
  let service: SellCarFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellCarFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
