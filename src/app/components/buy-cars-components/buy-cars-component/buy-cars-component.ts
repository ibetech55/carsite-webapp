import { Component, OnDestroy, OnInit } from '@angular/core';
import { BuyCarService } from '../../../Services/BuyCarService/buy-car-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICar, IViewCar } from '../../../Interfaces/Car/Car';
import { CommonModule } from '@angular/common';
import { BuyCarCard } from "../buy-car-card/buy-car-card";
import { IImage } from '../../../Interfaces/Image';

import { MoneyFormatterPipe } from '../../../Pipes/MoneyFormatter/money-formatter-pipe';
import { MilesFormatterPipe } from '../../../Pipes/MilesFormatter/miles-formatter-pipe';
import { LocationFormatterPipe } from '../../../Pipes/LocationFormatter/location-formatter-pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-cars-component',
  imports: [CommonModule, BuyCarCard, MoneyFormatterPipe, MilesFormatterPipe, LocationFormatterPipe],
  templateUrl: './buy-cars-component.html',
  styleUrl: './buy-cars-component.scss',
})
export class BuyCarsComponent implements OnInit, OnDestroy {
  public carsData$!:Observable<IViewCar[]>;
  carsData:IViewCar[] = []
  /**
   *
   */
  constructor(public _BuyCarsService:BuyCarService, private _Router: Router) {

  }
  ngOnDestroy(): void {
    this._BuyCarsService.carQuery = {
      makeName: [],
      modelName:[]
    }
  }
  ngOnInit(): void {
    this._BuyCarsService.getCars()
    this.carsData$ = this._BuyCarsService.carsData$;
  }

  defaultImage(images:IImage[]){
    return images?.find(i=>i.defaultImage)?.filename ?? ""
  }

  handleDetailsClick(carCode:string){
    this._Router.navigate([`car-details/${carCode}`]);
  }

  
}
