import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFEV800052Component } from './cfev800052.component';

describe('CFEV800052Component', () => {
  let component: CFEV800052Component;
  let fixture: ComponentFixture<CFEV800052Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CFEV800052Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CFEV800052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
