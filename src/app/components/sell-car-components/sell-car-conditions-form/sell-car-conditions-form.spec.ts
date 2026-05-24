import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCarConditionsForm } from './sell-car-conditions-form';

describe('SellCarConditionsForm', () => {
  let component: SellCarConditionsForm;
  let fixture: ComponentFixture<SellCarConditionsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCarConditionsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCarConditionsForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
