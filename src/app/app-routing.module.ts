import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponent } from './component/list/list.component';
import { HomeComponent } from './component/home/home.component';
import { RestaurantDetailComponent } from './component/restaurant-detail/restaurant-detail.component';
import { AllRestaurantsComponent } from './component/all-restaurants/all-restaurants.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'detail/:id', component: RestaurantDetailComponent },
  { path: 'all', component: AllRestaurantsComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
