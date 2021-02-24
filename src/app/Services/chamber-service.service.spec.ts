import { TestBed } from '@angular/core/testing';

import { ChamberServiceService } from './chamber-service.service';

describe('ChamberServiceService', () => {
  let service: ChamberServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChamberServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
