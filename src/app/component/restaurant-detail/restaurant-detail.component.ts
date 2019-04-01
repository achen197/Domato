import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant';
import { Location } from '@angular/common';
import { Review } from 'src/app/model/review';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {

  rest: Restaurant[];
  review: Review[];


  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private location: Location
) { }

  ngOnInit(): void {
    this.getRestaurant();
    this.getReview();
  }

  getRestaurant(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.restaurantService.getRestaurants(id)
      .subscribe(data => this.rest = data);
  }

  getReview(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.restaurantService.getReviews(id)
      .subscribe(data => {
        this.review = data;
        console.log(this.review);
        return this.review;
      });
  }

  getRating(rating) {
    return rating;
  }


  getPriceRange(range) {
    return '$'.repeat(range);
  }

  goBack(): void {
    this.location.back();
  }
}
