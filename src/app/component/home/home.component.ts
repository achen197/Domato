import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { Cuisine } from 'src/app/model/cuisine';
import { Category } from 'src/app/model/category';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/service/search.service';
import { Search } from 'src/app/model/search';
import { Restaurant } from 'src/app/model/restaurant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  cuisine: Cuisine[] = [];
  category: Category[] = [];
  trending: Restaurant[] = [];
  long: number;
  lat: number;
  location: number;
  selectedCuisine: string;
  // restaurant: Restaurant[] =[];

  constructor(
    private restaurantService: RestaurantService,
    private formBuilder: FormBuilder
  ) { }

  Cuisine = new FormControl();
  Category = new FormControl();
  domatoForm: FormGroup;

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

    this.restaurantService.getTrending()
      .subscribe(res => {
        this.trending = res;
        console.log(res);
        return this.trending;
      });

    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
    });

    this.domatoForm = this.formBuilder.group({
      cuisineControl: ['Asian']
    });

    // this.selectedCuisine = this.cuisine.find(x => x.cuisine_name === 'Asian').cuisine_name;
    // this.selectedCuisine = 'Asian';
  }

  getUserPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
    });
  }

  setCategory(id) {
    this.restaurantService.setCategory(id, this.lat, this.long);
  }

  setValue(distance, selectedCuisine, selectedCategory) {
    this.restaurantService.setData(distance * 1000, selectedCuisine, selectedCategory, this.lat, this.long);
  }
}
