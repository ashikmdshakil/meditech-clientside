import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermenComponent } from './supermen.component';

describe('SupermenComponent', () => {
  let component: SupermenComponent;
  let fixture: ComponentFixture<SupermenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
