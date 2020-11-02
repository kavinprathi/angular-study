import { TestBed } from '@angular/core/testing';

import { NestedserviceService } from './nestedservice.service';

describe('NestedserviceService', () => {
  let service: NestedserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NestedserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
