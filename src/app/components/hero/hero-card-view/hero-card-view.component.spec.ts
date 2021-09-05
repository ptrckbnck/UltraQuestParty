import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCardViewComponent } from './hero-card-view.component';

describe('HeroCardViewComponent', () => {
  let component: HeroCardViewComponent;
  let fixture: ComponentFixture<HeroCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
