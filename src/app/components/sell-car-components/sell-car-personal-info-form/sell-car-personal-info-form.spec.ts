import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCarPersonalInfoForm } from './sell-car-personal-info-form';

describe('SellCarPersonalInfoForm', () => {
  let component: SellCarPersonalInfoForm;
  let fixture: ComponentFixture<SellCarPersonalInfoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCarPersonalInfoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCarPersonalInfoForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
