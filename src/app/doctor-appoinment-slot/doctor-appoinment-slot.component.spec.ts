import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppoinmentSlotComponent } from './doctor-appoinment-slot.component';

describe('DoctorAppoinmentSlotComponent', () => {
  let component: DoctorAppoinmentSlotComponent;
  let fixture: ComponentFixture<DoctorAppoinmentSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorAppoinmentSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAppoinmentSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
