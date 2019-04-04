import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { Restaurant } from 'src/app/model/restaurant';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.scss']
})
export class AllRestaurantsComponent implements OnInit {
  trending: Restaurant[] = [];

  constructor(
    private restaurantService: RestaurantService
  ) { }

  ngOnInit() {
    this.restaurantService.getTrending()
    .subscribe(res => {
      this.trending = res;
      console.log(res);
      return this.trending;
    });
  }

}
