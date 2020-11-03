import { TestBed } from '@angular/core/testing';

import { ListeuserService } from './listeuser.service';

describe('ListeuserService', () => {
  let service: ListeuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
