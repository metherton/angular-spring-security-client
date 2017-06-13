import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOnsComponent } from './app-ons.component';

describe('AppOnsComponent', () => {
  let component: AppOnsComponent;
  let fixture: ComponentFixture<AppOnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
