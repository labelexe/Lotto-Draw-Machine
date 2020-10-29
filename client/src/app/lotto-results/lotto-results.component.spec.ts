import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoResultComponent } from './lotto-draw.component';

describe('LottoResultComponent', () => {
  let component: LottoResultComponent;
  let fixture: ComponentFixture<LottoResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
