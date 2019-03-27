import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { RestaurantService } from './service/restaurant.service';
import { HomeComponent } from './component/home/home.component';

import { MatAutocompleteModule , MatInputModule, MatSelectModule,
  MatIconModule} from '@angular/material';
import { RestaurantDetailComponent } from './component/restaurant-detail/restaurant-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    RestaurantDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,MatIconModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
