import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleMonthComponent } from './sale-month.component';

describe('SaleMonthComponent', () => {
  let component: SaleMonthComponent;
  let fixture: ComponentFixture<SaleMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
