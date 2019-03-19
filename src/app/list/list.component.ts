import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})

@Injectable({
  providedIn: 'root'
})

export class ListComponent implements OnInit {

  restaurant: any[] = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getCuisines()
      .subscribe(res => {
        this.restaurant = res;
        console.log(res);
        return this.restaurant;
      });
  }

}
