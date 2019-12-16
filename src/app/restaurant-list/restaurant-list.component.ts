import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { faMapMarkedAlt, faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { SnackbarService } from '../snackbar.service';
import { IsLoadingService } from '@service-work/is-loading';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  faMapMarkedAlt = faMapMarkedAlt;
  faAsterisk = faAsterisk;

  isLoggedIn$: Observable<boolean>;

  restaurants$: Observable<any[]>;

  isLoading: Observable<boolean>;

  url = this.restaurantService.getUrl();

  constructor(
    private restaurantService: RestaurantService,
    private isLoadingService: IsLoadingService,
    private userService: UserService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    this.isLoading = this.isLoadingService.isLoading$();
    this.isLoggedIn$ = this.userService.isLoggedIn;
    this.isLoadingService.add(this.restaurantService.getRestaurants());
    this.restaurants$ = this.restaurantService.getRestaurantList;
  }

  deleteRestaurant(restaurant) {
    this.restaurantService.deleteRestaurant(restaurant._id).subscribe((response) => {
      this.restaurantService.getRestaurants();
      this.snackbarService.open('Deleted', false);
    });
  }

}
