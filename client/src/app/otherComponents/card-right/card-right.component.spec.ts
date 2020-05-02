import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRightComponent } from './card-right.component';

describe('CardRightComponent', () => {
  let component: CardRightComponent;
  let fixture: ComponentFixture<CardRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
