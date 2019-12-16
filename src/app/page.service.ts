import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(
    private http: HttpClient
  ) { }

  getUrl(component) {
    switch (component) {
      case 'headers_log_in':
        return isDevMode() ? 'http://localhost:1337/headersloggedins/' : 'https://restaurant-cms-strapi.herokuapp.com/headersloggedins/';

      case 'headers_log_out':
        return isDevMode() ? 'http://localhost:1337/headersloggedouts/' : 'https://restaurant-cms-strapi.herokuapp.com/headersloggedouts/';
    }
  }

  getLoggedInHeaders() {
    return this.http.get(this.getUrl('headers_log_in'));
  }

  getLoggedOutHeaders() {
    return this.http.get(this.getUrl('headers_log_out'));
  }
}
