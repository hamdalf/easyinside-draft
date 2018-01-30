/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TexturesService } from './textures.service';

describe('TexturesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TexturesService]
    });
  });

  it('should ...', inject([TexturesService], (service: TexturesService) => {
    expect(service).toBeTruthy();
  }));
});
