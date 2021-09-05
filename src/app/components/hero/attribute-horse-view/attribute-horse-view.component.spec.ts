import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeHorseViewComponent } from './attribute-horse-view.component';

describe('AttributeHorseViewComponent', () => {
  let component: AttributeHorseViewComponent;
  let fixture: ComponentFixture<AttributeHorseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeHorseViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeHorseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
