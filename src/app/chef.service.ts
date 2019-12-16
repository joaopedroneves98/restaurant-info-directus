import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  devUrl = 'http://localhost:1337/chefs/';
  prodUrl = 'https://restaurant-cms-strapi.herokuapp.com/chefs/';

  constructor(private http: HttpClient) { }

  private chefList = new BehaviorSubject<any[]>([]);

  getUrl() {
    return isDevMode() ? this.devUrl : this.prodUrl;
  }

  get getChefList() {
    return this.chefList.asObservable();
  }

  getChefs() {
    return this.http.get(this.getUrl()).subscribe((data: any[]) => { this.chefList.next(data); });
  }
}
