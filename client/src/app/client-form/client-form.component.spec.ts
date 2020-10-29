import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetFormComponent } from './bet-form.component';

describe('BetFormComponent', () => {
  let component: BetFormComponent;
  let fixture: ComponentFixture<BetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
