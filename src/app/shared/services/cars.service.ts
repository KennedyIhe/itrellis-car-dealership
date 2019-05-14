import { Injectable } from '@angular/core';
import { Car } from '../models/Car';
import { Observable, of } from 'rxjs';
import { cars } from '../mock-data/cars-data';
// import { cars } from '../mock-data';
// import { cars } from '../mock-data/cars-data';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  constructor() {}

  // TODO: methods to return data from json file or create an in memory web api
  getAll(): Observable<Car[]> {
    return of(cars || []);
  }
}
