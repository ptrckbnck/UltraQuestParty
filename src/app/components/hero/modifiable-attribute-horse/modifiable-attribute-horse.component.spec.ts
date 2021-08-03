import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiableAttributeHorseComponent } from './modifiable-attribute-horse.component';

describe('ModifiableAttributeHorseComponent', () => {
  let component: ModifiableAttributeHorseComponent;
  let fixture: ComponentFixture<ModifiableAttributeHorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiableAttributeHorseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiableAttributeHorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
