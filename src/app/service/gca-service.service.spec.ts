import { TestBed } from '@angular/core/testing';

import { GcaServiceService } from './gca-service.service';

describe('GcaServiceService', () => {
  let service: GcaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GcaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
