import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageCarDetails } from './garage-car-details';

describe('GarageCarDetails', () => {
  let component: GarageCarDetails;
  let fixture: ComponentFixture<GarageCarDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarageCarDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarageCarDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
