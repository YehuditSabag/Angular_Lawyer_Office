import { TestBed } from '@angular/core/testing';

import { LawyerServiceService } from './lawyer-service.service';

describe('LawyerServiceService', () => {
  let service: LawyerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LawyerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
