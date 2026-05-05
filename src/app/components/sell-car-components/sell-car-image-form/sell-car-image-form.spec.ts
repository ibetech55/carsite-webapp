import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCarImageForm } from './sell-car-image-form';

describe('SellCarImageForm', () => {
  let component: SellCarImageForm;
  let fixture: ComponentFixture<SellCarImageForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCarImageForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellCarImageForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
