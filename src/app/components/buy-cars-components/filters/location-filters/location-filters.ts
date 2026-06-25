import { Component } from '@angular/core';
import { SelectComponent } from "../../../Shared/select-component/select-component";
import { InputComponent } from "../../../Shared/input-component/input-component";
import { BuyCarService } from '../../../../Services/BuyCarService/buy-car-service';

@Component({
  selector: 'app-location-filters',
  imports: [SelectComponent, InputComponent],
  templateUrl: './location-filters.html',
  styleUrl: './location-filters.scss',
})


export class LocationFilters {
  constructor(private readonly _BuyCarService: BuyCarService) {

  }
  distanceOptions = [
    { label: "10 miles", value: "10" },
    { label: "20 miles", value: "20" },
    { label: "30 miles", value: "30" },
    { label: "40 miles", value: "40" },
    { label: "50 miles", value: "50" },
    { label: "75 miles", value: "75" },
    { label: "100 miles", value: "100" },
    { label: "150 miles", value: "150" },
    { label: "150 miles", value: "150" },
    { label: "200 miles", value: "200" },
    { label: "All miles", value: "all" }
  ]

  handleDistanceSearch(value: string) {
    if (this._BuyCarService.carQuery?.zipCode && value && value !== "All miles") {
      this._BuyCarService.carQuery.searchRadius = +value;
      this._BuyCarService.getCars();
    }
  }

  handleBlur(value: string) {
    const val = value.trim();
    if (val.length === 5) {
      this._BuyCarService.carQuery.zipCode = value;
      this._BuyCarService.getCars();
    }
  }
}
