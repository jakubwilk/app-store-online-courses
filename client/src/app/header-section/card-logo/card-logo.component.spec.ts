import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLogoComponent } from './card-logo.component';

describe('CardLogoComponent', () => {
  let component: CardLogoComponent;
  let fixture: ComponentFixture<CardLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
