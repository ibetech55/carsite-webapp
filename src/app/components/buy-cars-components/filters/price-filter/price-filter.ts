import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { InputComponent } from '../../../Shared/input-component/input-component';
import { BuyCarService } from '../../../../Services/BuyCarService/buy-car-service';

@Component({
  selector: 'app-price-filter',
  imports: [MatSliderModule, InputComponent, CommonModule],
  templateUrl: './price-filter.html',
  styleUrl: './price-filter.scss',
})
export class PriceFilter {
  minVal = 0;
  maxVal = 200000;

  /**
   *
   */
  constructor(private readonly _BuyCarService: BuyCarService) {

  }

  handleChange(value: string, type: string) {
    const val = +value;
    if (type === "minVal") {
      this.minVal = val;
      this._BuyCarService.carQuery.minPrice = this.minVal;
    } else {
      this.maxVal = val;
      this._BuyCarService.carQuery.maxPrice = this.maxVal;
    }

    this._BuyCarService.getCars();
  }
}
