import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from 'src/app/model/restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { FormBuilder, FormGroup, Validators, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-grid-restaurant',
  templateUrl: './grid-restaurant.component.html',
  styleUrls: ['./grid-restaurant.component.scss']
})
export class GridRestaurantComponent implements OnInit {

  @Output() recordDeleted = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Input() restaurantData: Restaurant[];

  restaurantForm: FormGroup;

  constructor(
    private restaurantService: RestaurantService,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.restaurantForm = this._formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      locality: ['', Validators.required],
      cuisine: ['', Validators.required],
      cost: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
      rating: ['', Validators.required],
      votes: ['', Validators.required]
    });
  }

  deleteRecord(record) {
    console.log('delete' + record);
    this.recordDeleted.emit(record);
  }

  editRecord(record) {
    const clonedRecord = Object.assign({}, record);
    console.log('testing' + clonedRecord);
    this.editClicked.emit(clonedRecord);
  }

  newRestaurant() {
    this.newClicked.emit();
  }
}
