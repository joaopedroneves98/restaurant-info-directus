import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { UserService } from './user.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  devUrl = 'http://localhost:1337/restaurants/';
  prodUrl = 'https://restaurant-cms-strapi.herokuapp.com/restaurants/';

  private restaurantList = new BehaviorSubject<any[]>([]);

  get getRestaurantList() {
    return this.restaurantList.asObservable();
  }

  constructor(private http: HttpClient, private userService: UserService) { }

  getUrl() {
    return isDevMode() ? this.devUrl : this.prodUrl;
  }

  getRestaurants() {
    return this.http.get(this.getUrl(), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.userService.token,
      })
    }).subscribe((data: any[]) => { this.restaurantList.next(data); });
  }

  createRestaurant(restaurant) {
    return this.http.post(this.getUrl(), restaurant, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.userService.token,
      })
    });
  }

  deleteRestaurant(id) {
    return this.http.delete(this.getUrl() + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.userService.token,
      })
    });
  }
}
