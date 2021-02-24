import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChamberComponent } from './update-chamber.component';

describe('UpdateChamberComponent', () => {
  let component: UpdateChamberComponent;
  let fixture: ComponentFixture<UpdateChamberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateChamberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateChamberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
