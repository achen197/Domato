import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant';
import { Location } from '@angular/common';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {

  r: Restaurant[] = [];
  restId: number;


  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRestaurant();
  }

  getRestaurant(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.restaurantService.getRestaurants(id)
      .subscribe(data => this.r = data);
  }

  goBack(): void {
    this.location.back();
  }
}
