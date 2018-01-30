/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeometriesService } from './geometries.service';

describe('GeometriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeometriesService]
    });
  });

  it('should ...', inject([GeometriesService], (service: GeometriesService) => {
    expect(service).toBeTruthy();
  }));
});
