import { Component } from '@angular/core';
import { BuyCarsComponent } from '../../components/buy-cars-components/buy-cars-component/buy-cars-component';
import { BuyCarFilterComponent } from '../../components/buy-cars-components/buy-car-filter-component/buy-car-filter-component';

@Component({
  selector: 'app-buy-car-page',
  imports: [BuyCarsComponent, BuyCarFilterComponent],
  templateUrl: './buy-car-page.html',
  styleUrl: './buy-car-page.scss',
})
export class BuyCarPage {

}
