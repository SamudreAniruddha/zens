import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsOfCommunityComponent } from './benefits-of-community.component';

describe('BenefitsOfCommunityComponent', () => {
  let component: BenefitsOfCommunityComponent;
  let fixture: ComponentFixture<BenefitsOfCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsOfCommunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsOfCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
