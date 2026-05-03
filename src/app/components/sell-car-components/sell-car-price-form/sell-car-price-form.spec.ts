import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCarPriceForm } from './sell-car-price-form';

describe('SellCarPriceForm', () => {
  let component: SellCarPriceForm;
  let fixture: ComponentFixture<SellCarPriceForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCarPriceForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCarPriceForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
