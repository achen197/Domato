import { Component, OnInit } from '@angular/core';
import {map, startWith} from 'rxjs/operators';
import { Cuisine } from 'src/app/model/cuisine';
import { Category } from 'src/app/model/category';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  cuisine: Cuisine[] = [];
  category: Category[] = [];

  constructor(
    private restaurantService: RestaurantService
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
  }

  setValue(distance, selectedCuisine, selectedCategory) {
    this.restaurantService.setData(distance, selectedCuisine, selectedCategory);
  }
}
