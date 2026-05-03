import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCarDetailsForm } from './sell-car-details-form';

describe('SellCarDetailsForm', () => {
  let component: SellCarDetailsForm;
  let fixture: ComponentFixture<SellCarDetailsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCarDetailsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCarDetailsForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
