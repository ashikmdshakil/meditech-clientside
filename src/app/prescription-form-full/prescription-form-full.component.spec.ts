import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionFormFullComponent } from './prescription-form-full.component';

describe('PrescriptionFormFullComponent', () => {
  let component: PrescriptionFormFullComponent;
  let fixture: ComponentFixture<PrescriptionFormFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionFormFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionFormFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
