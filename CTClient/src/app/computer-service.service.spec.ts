import { TestBed } from '@angular/core/testing';

import { ComputerServiceService } from './computer-service.service';

describe('ComputerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComputerServiceService = TestBed.get(ComputerServiceService);
    expect(service).toBeTruthy();
  });
});
