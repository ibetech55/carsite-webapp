import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationFilters } from './location-filters';

describe('LocationFilters', () => {
  let component: LocationFilters;
  let fixture: ComponentFixture<LocationFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationFilters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
