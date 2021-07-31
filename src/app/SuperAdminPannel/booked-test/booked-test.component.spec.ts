import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedTestComponent } from './booked-test.component';

describe('BookedTestComponent', () => {
  let component: BookedTestComponent;
  let fixture: ComponentFixture<BookedTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
