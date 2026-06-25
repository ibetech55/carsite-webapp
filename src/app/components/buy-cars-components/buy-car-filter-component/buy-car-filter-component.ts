import { Component, OnInit, signal } from '@angular/core';
import { ButtonComponent } from "../../Shared/button-component/button-component";
import { MatExpansionModule } from '@angular/material/expansion';
import { InputComponent } from "../../Shared/input-component/input-component";
import { SelectComponent } from "../../Shared/select-component/select-component";
import { MakeFilter } from "../filters/make-filter/make-filter";
import { PriceFilter } from '../filters/price-filter/price-filter';
import { ModelFilters } from "../filters/model-filters/model-filters";
import { YearFilters } from "../filters/year-filters/year-filters";
import { Observable } from 'rxjs';
import { BuyCarService } from '../../../Services/BuyCarService/buy-car-service';
import { AsyncPipe } from '@angular/common';
import { LocationFilters } from "../filters/location-filters/location-filters";

@Component({
  selector: 'app-buy-car-filter-component',
  imports: [AsyncPipe, ButtonComponent, MatExpansionModule, MakeFilter, PriceFilter, ModelFilters, YearFilters, LocationFilters],
  templateUrl: './buy-car-filter-component.html',
  styleUrl: './buy-car-filter-component.scss',
})
export class BuyCarFilterComponent {
  totalCount$!: Observable<number>;

  /**
   *
   */

  constructor(private readonly _BuyCarService: BuyCarService) {
    this.totalCount$ = this._BuyCarService.totalCount$.asObservable();
  }




}
