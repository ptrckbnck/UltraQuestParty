import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiableAttributeComponent } from './modifiable-attribute.component';

describe('ModifiableAttributeComponent', () => {
  let component: ModifiableAttributeComponent;
  let fixture: ComponentFixture<ModifiableAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiableAttributeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiableAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
