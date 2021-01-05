import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V800006Component } from './v800006.component';

describe('V800006Component', () => {
  let component: V800006Component;
  let fixture: ComponentFixture<V800006Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V800006Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V800006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
