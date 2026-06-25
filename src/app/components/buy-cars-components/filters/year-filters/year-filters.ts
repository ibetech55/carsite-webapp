import { Component, OnInit } from '@angular/core';
import { SelectComponent } from "../../../Shared/select-component/select-component";
import { ISelectOptions } from '../../../../Interfaces/Shared';
import { GetYears } from '../../../../Utils/GetYears';
import { BuyCarService } from '../../../../Services/BuyCarService/buy-car-service';

@Component({
  selector: 'app-year-filters',
  imports: [SelectComponent],
  templateUrl: './year-filters.html',
  styleUrl: './year-filters.scss',
})
export class YearFilters implements OnInit {

  minYears: ISelectOptions[] = [];
  maxYears: ISelectOptions[] = [];
  minYrSelected = "";
  maxYrSelected = "";

  /**
   *
   */
  constructor(private readonly _BuyCarService: BuyCarService) {

  }


  ngOnInit(): void {
    this.minYears = GetYears.execute();
    this.maxYears = GetYears.execute();
  }

  handleChange(value: string, type: string) {

    if (type === "minYear") {
      this.minYrSelected = value
      this._BuyCarService.carQuery.minYear = +value

    } else if (type === "maxYear") {
      this.maxYrSelected = value
      this._BuyCarService.carQuery.maxYear = +value
    }

    if (this.minYrSelected && this.maxYrSelected && +this.minYrSelected > +this.maxYrSelected) {
      const max = this.maxYrSelected;
      const min = this.minYrSelected;

      this.minYrSelected = max;
      this.maxYrSelected = min;

      this._BuyCarService.carQuery.minYear = +max;
      this._BuyCarService.carQuery.maxYear = +min;
    }
    this._BuyCarService.getCars();
  }



}
