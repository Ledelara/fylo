import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalitiesComponentComponent } from './functionalities-component.component';

describe('FunctionalitiesComponentComponent', () => {
  let component: FunctionalitiesComponentComponent;
  let fixture: ComponentFixture<FunctionalitiesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionalitiesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionalitiesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
