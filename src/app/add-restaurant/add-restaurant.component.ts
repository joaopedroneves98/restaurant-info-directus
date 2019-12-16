import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import {
  MatDialog,
  MatDialogConfig,
} from '@angular/material';
import { AddRestaurantDialogComponent } from '../add-restaurant-dialog/add-restaurant-dialog.component';
import { filter } from 'rxjs/operators';
import { RestaurantService } from '../restaurant.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private restaurantService: RestaurantService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.userService.isLoggedIn;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AddRestaurantDialogComponent, dialogConfig);
    dialogConfig.data = {
      name: '',
      address: '',
      description: '',
      chef: []
    };

    dialogRef.afterClosed().pipe(filter(name => name)).subscribe(
      data => {
        console.log('Dialog output:', data);
        this.restaurantService.createRestaurant(data).subscribe((response) => {
          this.restaurantService.getRestaurants();
          this.snackbarService.open('Added!', false);
        });
      }
    );
  }

}
