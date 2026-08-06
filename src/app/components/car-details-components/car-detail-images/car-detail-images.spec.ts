import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailImages } from './car-detail-images';

describe('CarDetailImages', () => {
  let component: CarDetailImages;
  let fixture: ComponentFixture<CarDetailImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarDetailImages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDetailImages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
