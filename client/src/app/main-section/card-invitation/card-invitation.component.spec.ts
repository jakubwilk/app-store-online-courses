import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInvitationComponent } from './card-invitation.component';

describe('CardInvitationComponent', () => {
  let component: CardInvitationComponent;
  let fixture: ComponentFixture<CardInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
