import { Injectable } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Cuisine } from 'src/app/model/cuisine';
import { Category } from 'src/app/model/category';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { Search } from 'src/app/model/search';
import { Restaurant } from 'src/app/model/restaurant';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})

@Injectable({
  providedIn: 'root'
})

export class ListComponent implements OnInit {
  distance: string[];
  selectedCuisine: number;
  selectedCategory: number;
  userLat: number;
  userLong: number;
  restLat: number;
  restLong: number;
  search: Search[] = [];
  restaurant: Restaurant[] = [];

  @Input() restId: string;

  constructor(private restaurantService: RestaurantService) { }  

  ngOnInit(): void {

    function deg2rad(deg) {
      return deg * (Math.PI/180);
    }

    this.restaurantService.getSearch(this.distance, this.selectedCuisine, this.selectedCategory, this.userLat, this.userLong)
      .subscribe(res => {
        this.search = res;
        this.distance = res.map(dist => {
          let userLat = this.userLat;
          let userLong = this.userLong;
          let restLat = dist.location.latitude;
          let restLong = dist.location.longitude;
          let R = 6371;

          let dLat = deg2rad(userLat - restLat);
          let dLon = deg2rad(userLong - restLong);
          let a =
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(userLat)) * Math.cos(deg2rad(restLat)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 

          let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          let d = R * c;
          return d.toFixed(2);
          });
          console.log(res);
        return this.search, this.distance;
      });

      navigator.geolocation.getCurrentPosition(position => {
        this.userLat = position.coords.latitude;
        this.userLong =  position.coords.longitude;
      });
    }

    getPriceRange(range) {
      return "$".repeat(range);
    }
}
