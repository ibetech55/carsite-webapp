import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCheckbox } from './filter-checkbox';

describe('FilterCheckbox', () => {
  let component: FilterCheckbox;
  let fixture: ComponentFixture<FilterCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterCheckbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCheckbox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
