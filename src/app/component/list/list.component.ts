import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Cuisine } from 'src/app/model/cuisine';
import { Category } from 'src/app/model/category';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})

@Injectable({
  providedIn: 'root'
})

export class ListComponent implements OnInit {

  cuisine: Cuisine[] = [];
  category: Category[] = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getCuisines()
      .subscribe(res => {
        this.cuisine = res;
        console.log(res);
        return this.cuisine;
      });

      this.restaurantService.getCategories()
      .subscribe(res => {
        this.category = res;
        console.log(res);
        return this.category;
      });
  }

}
