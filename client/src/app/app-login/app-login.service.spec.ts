import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, RequestOptions, XHRBackend, Response, ResponseOptions, ConnectionBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { AppLoginService } from './app-login.service';

describe('AppLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [AppLoginService]
    });
  });

  it('should be created', inject([AppLoginService], (service: AppLoginService) => {
    expect(service).toBeTruthy();
  }));
});
