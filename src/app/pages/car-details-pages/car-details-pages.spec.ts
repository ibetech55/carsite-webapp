import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailsPages } from './car-details-pages';

describe('CarDetailsPages', () => {
  let component: CarDetailsPages;
  let fixture: ComponentFixture<CarDetailsPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarDetailsPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDetailsPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
