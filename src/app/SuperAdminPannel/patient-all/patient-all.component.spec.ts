import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAllComponent } from './patient-all.component';

describe('PatientAllComponent', () => {
  let component: PatientAllComponent;
  let fixture: ComponentFixture<PatientAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
