import { TestBed, inject } from '@angular/core/testing';

import { AppHomeService } from './app-home.service';

describe('AppHomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppHomeService]
    });
  });

  it('should be created', inject([AppHomeService], (service: AppHomeService) => {
    expect(service).toBeTruthy();
  }));
});
