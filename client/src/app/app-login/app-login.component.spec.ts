import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {AppLoginService} from './app-login.service';
import {CredentialsService} from '../credentials.service';

import { HttpModule, Http, BaseRequestOptions, RequestOptions, XHRBackend, Response, ResponseOptions, ConnectionBackend } from '@angular/http';
import { Router,
  NavigationExtras } from '@angular/router';

import { AppLoginComponent } from './app-login.component';

describe('AppLoginComponent', () => {
  let component: AppLoginComponent;
  let fixture: ComponentFixture<AppLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule],
      declarations: [ AppLoginComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide: AppLoginService, useValue: {getUser: jasmine.createSpy('getUser')}},
        {provide: CredentialsService, useValue: {setPassword: jasmine.createSpy('setPassword'), setUsername: jasmine.createSpy('setUsername'), setAuthenticated: jasmine.createSpy('setAuthenticated')}},
        {provide: Router, useValue: {navigate: jasmine.createSpy('navigate')}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
