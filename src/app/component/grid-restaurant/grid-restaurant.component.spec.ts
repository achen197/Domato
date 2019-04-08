import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridRestaurantComponent } from './grid-restaurant.component';

describe('GridRestaurantComponent', () => {
  let component: GridRestaurantComponent;
  let fixture: ComponentFixture<GridRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
