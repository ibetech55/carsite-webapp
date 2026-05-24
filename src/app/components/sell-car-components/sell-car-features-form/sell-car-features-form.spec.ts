import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCarFeaturesForm } from './sell-car-features-form';

describe('SellCarFeaturesForm', () => {
  let component: SellCarFeaturesForm;
  let fixture: ComponentFixture<SellCarFeaturesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCarFeaturesForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCarFeaturesForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
