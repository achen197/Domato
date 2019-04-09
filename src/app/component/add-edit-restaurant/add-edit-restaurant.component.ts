import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cuisine } from 'src/app/model/cuisine';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { Category } from 'src/app/model/category';
import { Restaurant } from 'src/app/model/restaurant';
import { FormBuilder, FormGroup, Validators, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-add-edit-restaurant',
  templateUrl: './add-edit-restaurant.component.html',
  styleUrls: ['./add-edit-restaurant.component.scss']
})
export class AddEditRestaurantComponent implements OnInit {

  @Output() restaurantCreated = new EventEmitter<any>();
  @Input() restaurantInfo: any;

  cuisine: Cuisine[] = [];
  category: Category[] = [];
  selectedCuisine: string;
  currentRestaurant: any;

  restaurantForm: FormGroup;

  constructor(
    private restaurantService: RestaurantService,
    private _formBuilder: FormBuilder,
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

    this.restaurantForm = this._formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      locality: ['', Validators.required],
      cuisine: ['', Validators.required],
      cost: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
      rating: ['', Validators.required],
      votes: ['', Validators.required]
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
