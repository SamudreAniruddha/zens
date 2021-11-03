import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoveUsComponent } from './user-love-us.component';

describe('UserLoveUsComponent', () => {
  let component: UserLoveUsComponent;
  let fixture: ComponentFixture<UserLoveUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoveUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoveUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
