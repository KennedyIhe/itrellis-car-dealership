import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarsService } from './shared/services/cars.service';
import { CarsFilterPipe } from './shared/pipes/cars-filter';

// TODO: import any modules that will be used in the app

@NgModule({
  declarations: [AppComponent, CarsFilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
