import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FRAFSI114Component } from './frafsi114.component';

describe('FRAFSI114Component', () => {
  let component: FRAFSI114Component;
  let fixture: ComponentFixture<FRAFSI114Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FRAFSI114Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FRAFSI114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
