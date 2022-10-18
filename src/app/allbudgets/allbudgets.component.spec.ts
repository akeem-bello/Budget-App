import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbudgetsComponent } from './allbudgets.component';

describe('AllbudgetsComponent', () => {
  let component: AllbudgetsComponent;
  let fixture: ComponentFixture<AllbudgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllbudgetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllbudgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
