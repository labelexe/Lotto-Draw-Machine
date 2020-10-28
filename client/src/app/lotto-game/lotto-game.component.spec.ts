import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoGameComponent } from './lotto-game.component';

describe('LottoGameComponent', () => {
  let component: LottoGameComponent;
  let fixture: ComponentFixture<LottoGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
