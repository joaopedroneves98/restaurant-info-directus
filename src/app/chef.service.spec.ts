import { TestBed } from '@angular/core/testing';

import { ChefService } from './chef.service';

describe('ChefService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChefService = TestBed.get(ChefService);
    expect(service).toBeTruthy();
  });
});
