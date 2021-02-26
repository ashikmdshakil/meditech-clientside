import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorChamberListComponent } from './doctor-chamber-list.component';

describe('DoctorChamberListComponent', () => {
  let component: DoctorChamberListComponent;
  let fixture: ComponentFixture<DoctorChamberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorChamberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorChamberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
