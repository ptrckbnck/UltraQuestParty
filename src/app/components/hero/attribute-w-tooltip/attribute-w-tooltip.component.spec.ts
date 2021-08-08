import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeWTooltipComponent } from './attribute-w-tooltip.component';

describe('AttributeWTooltipComponent', () => {
  let component: AttributeWTooltipComponent;
  let fixture: ComponentFixture<AttributeWTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeWTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeWTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
