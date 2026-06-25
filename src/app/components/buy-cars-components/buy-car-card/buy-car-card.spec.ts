import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCarCard } from './buy-car-card';

describe('BuyCarCard', () => {
  let component: BuyCarCard;
  let fixture: ComponentFixture<BuyCarCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyCarCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyCarCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
