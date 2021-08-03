import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityNewComponent } from './ability-new.component';

describe('AbilityNewComponent', () => {
  let component: AbilityNewComponent;
  let fixture: ComponentFixture<AbilityNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
