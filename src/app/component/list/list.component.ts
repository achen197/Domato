import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Cuisine } from 'src/app/model/cuisine';
import { Category } from 'src/app/model/category';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { Search } from 'src/app/model/search';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})

@Injectable({
  providedIn: 'root'
})

export class ListComponent implements OnInit {
  distance: number;
  selectedCuisine: number;
  search: Search[] = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getSearch(this.distance, this.selectedCuisine)
      .subscribe(res => {
        this.search = res;
        console.log(res);
        return this.search;
      });
  }

}
