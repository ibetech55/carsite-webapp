import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCarColorInputs } from './sell-car-color-inputs';

describe('SellCarColorInputs', () => {
  let component: SellCarColorInputs;
  let fixture: ComponentFixture<SellCarColorInputs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCarColorInputs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCarColorInputs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
