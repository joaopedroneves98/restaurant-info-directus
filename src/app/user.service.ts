import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SnackbarService } from './snackbar.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost/directus/public/cms/';

  username: string;
  token: string;
  email: string;

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private snackbarService: SnackbarService
  ) { }

  setUser(username, token, email) {
    this.username = username;
    this.token = token;
    this.email = email;
    this.setCookie(token);
  }

  login(email, password) {
    return this.http.post(this.url + 'auth/authenticate', {
      email,
      password
    }, httpOptions).subscribe(
      (response: any) => {
        this.setCookie(response.data.token);
        this.setUser(email, response.data.token, email);
        this.loggedIn.next(true);
        this.router.navigateByUrl('/');
      },
      (error) => this.snackbarService.open('Wrong credentials!', false));
  }

  register(email, password, first_name, last_name) {
    return this.http.post(this.url + 'users', {
      email,
      password,
      first_name,
      last_name,
      role: "3",
      status: "active"
    }, httpOptions).subscribe(
      (response: any) => {
        this.login(email, password);
      },
      (error) => this.snackbarService.open('Error!', false));
  }

  getCookie() {
    return this.cookieService.get('jwt');
  }

  setCookie(value: string): void {
    this.cookieService.set('jwt', value);
  }

  deleteCookie(): void {
    this.cookieService.delete('jwt');
  }

  logout() {
    this.username = undefined;
    this.token = undefined;
    this.email = undefined;
    this.deleteCookie();
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
