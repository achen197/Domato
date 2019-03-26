import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Category, ThingWrapper, CategoryRes } from '../model/category';
import { Cuisine, CuisineRes } from '../model/cuisine';
import { Restaurant } from '../model/restaurant';
import { Search, SearchRes } from '../model/search';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  apiKey = "aec302bd2bf3ac9c4cc94f8536a12bc3";
  private distance: number;
  private selectedCuisine: number;
  private selectedCategory: number;
  private lat: number;
  private long: number;

  getData() {
    console.log(this.selectedCuisine);
    return [this.distance, this.selectedCuisine, this.selectedCategory];
  }
  
  setData(distance, selectedCuisine, selectedCategory, lat, long) {
    this.distance = distance;
    this.selectedCuisine = selectedCuisine;
    this.selectedCategory = selectedCategory;
    this.lat = lat;
    this.long = long;
    console.log(this.selectedCuisine + " setting " + this.distance + " " + this.selectedCategory + this.lat + this.long);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<CategoryRes>("https://developers.zomato.com/api/v2.1/categories", { headers: {'user-key': this.apiKey} })
    .pipe(map(res => {
      return res.categories.map(arr => arr.categories)
    }));
  }

  getCuisines(): Observable<Cuisine[]> {
    return this.http.get<CuisineRes>("https://developers.zomato.com/api/v2.1/cuisines?city_id=298", { headers: {'user-key': this.apiKey} })
      .pipe(map(res => {
        return res.cuisines.map(arr => arr.cuisine)
      }));
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>("https://developers.zomato.com/api/v2.1/restaurant?res_id=16593328", { headers: {'user-key': this.apiKey} });
  }

  getSearch(distance, selectedCuisine, selectedCategory, lat, long): Observable<Search[]> {
    distance = this.distance;
    selectedCuisine = this.selectedCuisine;
    selectedCategory = this.selectedCategory;
    lat = this.lat;
    long = this.long;
    // return this.http.get<SearchRes>(`https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${long}&radius=${distance}&cuisines=${selectedCuisine}&category=${selectedCategory}`, { headers: {'user-key': this.apiKey} })
    return this.http.get<SearchRes>(`https://developers.zomato.com/api/v2.1/search?lat=-27.468190399999997&lon=153.0206561&radius=1000&cuisines=${selectedCuisine}&category=${selectedCategory}`, { headers: {'user-key': this.apiKey} })
    .pipe(map(res =>  {
      return res.restaurants.map(arr => arr.restaurant)
    }));
  }

  
}

