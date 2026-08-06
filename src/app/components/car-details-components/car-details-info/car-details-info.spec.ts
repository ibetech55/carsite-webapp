import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailsInfo } from './car-details-info';

describe('CarDetailsInfo', () => {
  let component: CarDetailsInfo;
  let fixture: ComponentFixture<CarDetailsInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarDetailsInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDetailsInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
