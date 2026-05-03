import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCarPage } from './buy-car-page';

describe('BuyCarPage', () => {
  let component: BuyCarPage;
  let fixture: ComponentFixture<BuyCarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyCarPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyCarPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
