/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DingsService } from './dings.service';

describe('DingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DingsService]
    });
  });

  it('should ...', inject([DingsService], (service: DingsService) => {
    expect(service).toBeTruthy();
  }));
});
