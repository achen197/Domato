import { Component, OnInit } from '@angular/core';
import {map, startWith} from 'rxjs/operators';
import { Cuisine } from 'src/app/model/cuisine';
import { Category } from 'src/app/model/category';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  cuisine: Cuisine[] = [];
  category: Category[] = [];
  long: number;
  lat: number;
  location: number;

  constructor(
    private restaurantService: RestaurantService,
    private searchService: SearchService
  ) { }

  Cuisine = new FormControl();
  Category = new FormControl();

  ngOnInit(): void {

    this.restaurantService.getCuisines()
      .subscribe(res => {
        this.cuisine = res;
        return this.cuisine;
      });

      this.restaurantService.getCategories()
      .subscribe(res => {
        this.category = res;
        return this.category;
      });

      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.long =  position.coords.longitude;
        console.log(this.lat, this.long);
      });

  }

  getUserPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.long =  position.coords.longitude;
      // console.log(this.lat, this.long);
    });
  }

  setValue(distance, selectedCuisine, selectedCategory) {
    this.restaurantService.setData(distance, selectedCuisine, selectedCategory, this.lat, this.long);
  }
}
