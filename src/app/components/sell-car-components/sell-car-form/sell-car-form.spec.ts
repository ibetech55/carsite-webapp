import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCarForm } from './sell-car-form';

describe('SellCarForm', () => {
  let component: SellCarForm;
  let fixture: ComponentFixture<SellCarForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCarForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCarForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
