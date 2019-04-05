import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { Restaurant } from 'src/app/model/restaurant';
import * as _ from 'lodash';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.scss']
})
export class AllRestaurantsComponent implements OnInit {
  trending: Restaurant[] = [];
  currentRestaurant: any;

  @Input() restaurantData: Restaurant[];

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
          .subscribe(restaurantRecord => this.restaurantData.push(restaurant));
      }

      this.currentRestaurant = this.setInitialValues();
    }

  ngOnInit() {
    this.restaurantService.getTrending()
    .subscribe(res => {
      this.trending = res;
      console.log(res);
      return this.trending;
    });
  }
  

}
