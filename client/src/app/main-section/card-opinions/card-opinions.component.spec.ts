import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOpinionsComponent } from './card-opinions.component';

describe('CardOpinionsComponent', () => {
  let component: CardOpinionsComponent;
  let fixture: ComponentFixture<CardOpinionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOpinionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOpinionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
