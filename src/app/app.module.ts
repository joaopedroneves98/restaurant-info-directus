import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatSelectModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AddRestaurantDialogComponent } from './add-restaurant-dialog/add-restaurant-dialog.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    AppHeaderComponent,
    AddRestaurantComponent,
    AddRestaurantDialogComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [AddRestaurantDialogComponent]
})
export class AppModule { }
