import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearFilters } from './year-filters';

describe('YearFilters', () => {
  let component: YearFilters;
  let fixture: ComponentFixture<YearFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearFilters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
