import { Component, OnInit } from '@angular/core';
import { CarsService } from './shared/services/cars.service';
import { map } from 'rxjs/operators';
import { Car } from './shared/models/Car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (
    private carService: CarsService
  ) {}

  cars: Car[] = [];
  hasSunRoof = false;
  hasFourWheel = false;
  hasPowerWindow = false;
  title = 'car-dealership';

  ngOnInit() {
    this.loadCars();
  }

  onSunRoofChange(eve: any) {
    this.hasSunRoof = !this.hasSunRoof;
    this.filterTable();
  }

  onFourWheelChange(eve: any) {
    this.hasFourWheel = !this.hasFourWheel;
    this.filterTable();
  }

  onPowerWindowsChange(eve: any) {
    this.hasPowerWindow = !this.hasPowerWindow;
    this.filterTable();
  }

  filterTable() {
    const arr: Car[] = [];
    // For a production development, I will have cars cached
    // to avoid multiple hit to the database
    this.carService.getAll()
    .subscribe(cars => {
      cars.forEach(car => {
        if (this.hasSunRoof && !car.hasSunroof
          || this.hasFourWheel && !car.isFourWheelDrive
          || this.hasPowerWindow && !car.hasPowerWindows) {
            return;
          }
          arr.push(car);
      });
      this.cars = arr;
    });
  }

  loadCars() {
    this.carService.getAll()
    .subscribe(data => {
      this.cars = data;
    });
  }
}
