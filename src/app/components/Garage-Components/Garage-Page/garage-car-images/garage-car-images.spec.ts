import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageCarImages } from './garage-car-images';

describe('GarageCarImages', () => {
  let component: GarageCarImages;
  let fixture: ComponentFixture<GarageCarImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarageCarImages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarageCarImages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
