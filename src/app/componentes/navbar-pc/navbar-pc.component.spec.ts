import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPcComponent } from './navbar-pc.component';

describe('NavbarPcComponent', () => {
  let component: NavbarPcComponent;
  let fixture: ComponentFixture<NavbarPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
