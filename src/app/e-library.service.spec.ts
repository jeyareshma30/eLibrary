import { TestBed } from '@angular/core/testing';

import { ELibraryService } from './e-library.service';

describe('ELibraryService', () => {
  let service: ELibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ELibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
