import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  apiKey = "aec302bd2bf3ac9c4cc94f8536a12bc3";

  getCategories(): Observable<any[]> {
    // const headers = new HttpHeaders()
    //              headers.append('Access-Control-Allow-Methods', 'GET');
    //              headers.append('Access-Control-Allow-Origin', 'http://localhost:4200/*');
    //              headers.append("Accept", "application/json");
    //              headers.append("Content-Type", "application/json");
    //              headers.append('user-key', 'aec302bd2bf3ac9c4cc94f8536a12bc3');
                 

                 return this.http
                        .get<any[]>("https://developers.zomato.com/api/v2.1/categories", { headers: {'user-key': this.apiKey} });
  }

  getCuisines(): Observable<any[]> {
    return this.http.get<any[]>("https://developers.zomato.com/api/v2.1/cuisines?city_id=298", { headers: {'user-key': this.apiKey} });
  }
}


