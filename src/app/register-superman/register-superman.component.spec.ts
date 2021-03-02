import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSupermanComponent } from './register-superman.component';

describe('RegisterSupermanComponent', () => {
  let component: RegisterSupermanComponent;
  let fixture: ComponentFixture<RegisterSupermanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSupermanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSupermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
