import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCoursesComponent } from './card-courses.component';

describe('CardCoursesComponent', () => {
  let component: CardCoursesComponent;
  let fixture: ComponentFixture<CardCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
