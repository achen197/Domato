import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cuisine } from 'src/app/model/cuisine';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { Category } from 'src/app/model/category';
import { Restaurant } from 'src/app/model/restaurant';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-restaurant',
  templateUrl: './add-edit-restaurant.component.html',
  styleUrls: ['./add-edit-restaurant.component.scss']
})
export class AddEditRestaurantComponent implements OnInit {

  @Output() restaurantCreated = new EventEmitter<any>();
  @Input() restaurantInfo: Restaurant;

  cuisine: Cuisine[] = [];
  category: Category[] = [];
  selectedCuisine: string;
  // restaurantInfo: Restaurant[] = [];

  restaurantForm = new FormGroup({
    name: new FormControl()
  });

constructor(
  private restaurantService: RestaurantService
) {
  this.clearRestaurantInfo();
}

ngOnInit() {
  this.restaurantService.getCategories()
    .subscribe(res => {
      this.category = res;
      console.log(res);
      return this.category;
    });

}

clearRestaurantInfo() {
  this.restaurantInfo = {
    id: undefined,
    name: '',
    location: '',
    locaility: '',
    cuisine: '',
    averageCost: '',
    priceRange: '',
    featuredImage: '',
    userRating: '',
    votes: '',
  };
}

addOrEditRestaurant(event) {
  this.restaurantCreated.emit(this.restaurantInfo);
  this.clearRestaurantInfo();
}

}
