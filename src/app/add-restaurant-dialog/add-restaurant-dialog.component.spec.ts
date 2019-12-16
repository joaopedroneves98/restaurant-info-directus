import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestaurantDialogComponent } from './add-restaurant-dialog.component';

describe('AddRestaurantDialogComponent', () => {
  let component: AddRestaurantDialogComponent;
  let fixture: ComponentFixture<AddRestaurantDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRestaurantDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRestaurantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
