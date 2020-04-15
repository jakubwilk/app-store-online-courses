import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCategoriesComponent } from './card-categories.component';

describe('CardCategoriesComponent', () => {
  let component: CardCategoriesComponent;
  let fixture: ComponentFixture<CardCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
