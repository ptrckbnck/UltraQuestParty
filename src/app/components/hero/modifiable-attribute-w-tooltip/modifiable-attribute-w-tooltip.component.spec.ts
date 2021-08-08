import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiableAttributeWTooltipComponent } from './modifiable-attribute-w-tooltip.component';

describe('ModifiableAttributeWTooltipComponent', () => {
  let component: ModifiableAttributeWTooltipComponent;
  let fixture: ComponentFixture<ModifiableAttributeWTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiableAttributeWTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiableAttributeWTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
