import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermanListComponent } from './superman-list.component';

describe('SupermanListComponent', () => {
  let component: SupermanListComponent;
  let fixture: ComponentFixture<SupermanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
