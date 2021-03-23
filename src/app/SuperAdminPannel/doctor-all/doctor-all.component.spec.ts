import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAllComponent } from './doctor-all.component';

describe('DoctorAllComponent', () => {
  let component: DoctorAllComponent;
  let fixture: ComponentFixture<DoctorAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
