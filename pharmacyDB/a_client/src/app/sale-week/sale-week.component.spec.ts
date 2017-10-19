import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleWeekComponent } from './sale-week.component';

describe('SaleWeekComponent', () => {
  let component: SaleWeekComponent;
  let fixture: ComponentFixture<SaleWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
