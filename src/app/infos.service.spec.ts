/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InfosService } from './infos.service';

describe('InfosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfosService]
    });
  });

  it('should ...', inject([InfosService], (service: InfosService) => {
    expect(service).toBeTruthy();
  }));
});
