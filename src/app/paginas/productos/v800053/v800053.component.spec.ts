import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V800053Component } from './v800053.component';

describe('V800053Component', () => {
  let component: V800053Component;
  let fixture: ComponentFixture<V800053Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V800053Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V800053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
