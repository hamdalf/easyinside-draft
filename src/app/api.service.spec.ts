/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ApiService } from './api.service';

fdescribe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ApiService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  /*it('getDings() (deep test)', inject([ApiService], (service: ApiService) => {
    service.getDings().subscribe((dings) => {
      expect(dings.length).toBe(45);
    });
  }));*/

  it('getDings() (shallow test)', inject([ApiService, XHRBackend], (service: ApiService, mockBackend: MockBackend) => {
    const mockResponse = [
        {'_id':'5909ef6f8a0d422b37dc524'}
    ];

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });

    service.getDings().subscribe((dings) => {
      console.log(dings);
      expect(dings.length).toBe(1);
    });
  }));
});
