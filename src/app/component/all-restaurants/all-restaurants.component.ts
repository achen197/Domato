import { Component, OnInit, Input, Output } from '@angular/core';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { Restaurant } from 'src/app/model/restaurant';
import * as _ from 'lodash';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.scss']
})
export class AllRestaurantsComponent implements OnInit {
  trending: Restaurant[];
  currentRestaurant: any;
  restaurantData: Array<any>;
  // restaurantData: Restaurant[];


  constructor(
    private restaurantService: RestaurantService,
    ) {
      this.currentRestaurant = this.setInitialValues();
    }

    private setInitialValues() {
      return {
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

    createOrUpdateRestaurant(restaurant: any) {
      let restaurantWithId;
      restaurantWithId = _.find(this.restaurantData, (el => el.id === restaurant.id));

      if (restaurantWithId) {
        const updateIndex = _.findIndex(this.restaurantData, {id: restaurantWithId.id});
        this.restaurantService.UpdateRestaurant(restaurant)
          .subscribe(restaurantRecord => this.restaurantData.splice(updateIndex, 1, restaurant));
      } else {
        this.restaurantService.CreateRestaurant(restaurant)
          .subscribe((restaurantRecord: Restaurant) => {
            this.restaurantData.push(restaurantRecord);
          });
      }

      this.currentRestaurant = this.setInitialValues();
    }

    ngOnInit() {
      this.restaurantService.get()
      .subscribe((data: any) => {
        this.trending = data;
        return this.trending;
      });
    }

  editClicked(record) {
    this.currentRestaurant = record;
  }

  newClicked() {
    this.currentRestaurant = this.setInitialValues();
  }

  deleteClicked(record) {
    const deleteIndex = _.findIndex(this.restaurantData, {id: record.id});
    this.restaurantService.DeleteRestaurant(record)
      .subscribe(result => {
        // debugger;
        this.restaurantData.splice(deleteIndex, 1);
      });
  }

}
