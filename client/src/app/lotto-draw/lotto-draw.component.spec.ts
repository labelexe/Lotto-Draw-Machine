import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoDrawComponent } from './lotto-draw.component';

describe('LottoDrawComponent', () => {
  let component: LottoDrawComponent;
  let fixture: ComponentFixture<LottoDrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoDrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
