import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IsLoadingService } from '@service-work/is-loading';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  isLoading: Observable<boolean>;

  constructor(
    private isLoadingService: IsLoadingService,
    private userService: UserService,
    public router: Router) {
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  ngOnInit() {
    this.isLoading = this.isLoadingService.isLoading$();
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(loginForm) {
    this.isLoadingService.add(this.userService.login(loginForm.email, loginForm.password));
  }

}
