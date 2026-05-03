import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTemplate } from './site-template';

describe('SiteTemplate', () => {
  let component: SiteTemplate;
  let fixture: ComponentFixture<SiteTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
