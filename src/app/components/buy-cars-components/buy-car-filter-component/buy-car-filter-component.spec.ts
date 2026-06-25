import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCarFilterComponent } from './buy-car-filter-component';

describe('BuyCarFilterComponent', () => {
  let component: BuyCarFilterComponent;
  let fixture: ComponentFixture<BuyCarFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyCarFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyCarFilterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
