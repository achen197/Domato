import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { Cuisine } from '../model/cuisine';
import { Restaurant } from '../model/restaurant';
import { Search } from '../model/search';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  apiKey = "aec302bd2bf3ac9c4cc94f8536a12bc3";
  private distance;
  private selectedCuisine;
  private selectedCategory

  getData() {
    console.log(this.selectedCuisine);
    return [this.distance, this.selectedCuisine, this.selectedCategory];
  }
  
  setData(distance, selectedCuisine, selectedCategory) {
    this.distance = distance;
    this.selectedCuisine = selectedCuisine;
    this.selectedCategory = selectedCategory;
    console.log(this.selectedCuisine + " setting " + this.distance + " " + this.selectedCategory);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>("https://developers.zomato.com/api/v2.1/categories", { headers: {'user-key': this.apiKey} })
    .pipe(map(res => res.categories));
  }

  getCuisines(): Observable<Cuisine[]> {
    return this.http.get<Cuisine[]>("https://developers.zomato.com/api/v2.1/cuisines?city_id=298", { headers: {'user-key': this.apiKey} })
      .pipe(map(res => res.cuisines));
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>("https://developers.zomato.com/api/v2.1/restaurant?res_id=16593328", { headers: {'user-key': this.apiKey} });
  }

  getSearch(distance, selectedCuisine, selectedCategory): Observable<Search[]> {
    distance = this.distance;
    selectedCuisine = this.selectedCuisine;
    selectedCategory = this.selectedCategory;
    return this.http.get<Search[]>(`https://developers.zomato.com/api/v2.1/search?entity_id=298&entity_type=city&radius=${distance}&cuisines=${selectedCuisine}&category=${selectedCategory}`, { headers: {'user-key': this.apiKey} })
    .pipe(map(res => res.restaurants));

  }
}


