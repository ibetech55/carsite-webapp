import { Injectable, OnInit } from '@angular/core';
import { CarService } from '../CarService/car-service';
import { BehaviorSubject } from 'rxjs';
import { ICar } from '../../Interfaces/Car/Car';
import { IImage } from '../../Interfaces/Image';

@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  public header$ = new BehaviorSubject("");
  public car$ = new BehaviorSubject<ICar | null>(null);
  public images$ = new BehaviorSubject<IImage[]>([]);
  
  /**
   *
   */
  constructor(private readonly _CarService: CarService) {

  }

  getCarByCarCode(carCode: string) {
    this._CarService.getCarByCarCode(carCode)
      .subscribe(data => {
        console.log(data)
        this.header$.next(`${data.makeName} ${data.modelName}`);
        this.car$.next(data);
        this.images$.next(data.images);
      })
  }


}
