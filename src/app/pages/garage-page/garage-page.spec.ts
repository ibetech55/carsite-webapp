import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragePage } from './garage-page';

describe('GaragePage', () => {
  let component: GaragePage;
  let fixture: ComponentFixture<GaragePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaragePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaragePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
