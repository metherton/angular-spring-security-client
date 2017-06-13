import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, RequestOptions, XHRBackend, Response, ResponseOptions, ConnectionBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {CredentialsService} from '../credentials.service';


import { AppHomeService } from './app-home.service';

describe('AppHomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [AppHomeService, 
        {provide: CredentialsService, useValue: {getUsername: jasmine.createSpy('getUsername'), getPassword: jasmine.createSpy('getPassword')}}, {provide: XHRBackend, useClass: MockBackend}]
    });
  });

  it('should be created', inject([AppHomeService], (service: AppHomeService) => {
    expect(service).toBeTruthy();
  }));
});
