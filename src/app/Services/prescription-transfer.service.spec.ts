import { TestBed } from '@angular/core/testing';

import { PrescriptionTransferService } from './prescription-transfer.service';

describe('PrescriptionTransferService', () => {
  let service: PrescriptionTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescriptionTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
