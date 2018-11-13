import { TestBed } from '@angular/core/testing';

import { ExportNumService } from './export-num.service';

describe('ExportNumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExportNumService = TestBed.get(ExportNumService);
    expect(service).toBeTruthy();
  });
});
