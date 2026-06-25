import { Injectable } from '@angular/core';
import { CarService } from '../CarService/car-service';
import { BehaviorSubject, Observable, of, switchMap, tap } from 'rxjs';
import { ICar, ICarQuery, IViewCar } from '../../Interfaces/Car/Car';
import { MakeService } from '../MakeService/make-service';
import { IMakeList } from '../../Interfaces/Makes';
import { IModelFilterList, IModelList } from '../../Interfaces/Model';
import { ModelService } from '../ModelService/model-service';

@Injectable({
  providedIn: 'root',
})
export class BuyCarService {
  public carsData$ = new BehaviorSubject<IViewCar[]>([]);
  public makeNameList$ = new BehaviorSubject<IMakeList[]>([]);
  public modelNameList$ = new BehaviorSubject<IModelFilterList[]>([]);
  public totalCount$ = new BehaviorSubject<number>(0);

  carQuery: ICarQuery = {
    makeName: [],
    modelName: [],
  };

  /**
   *
   */
  constructor(private readonly _CarService: CarService, private readonly _MakeService: MakeService, private readonly _ModelService: ModelService) {

  }

  getMakeList() {
    this._MakeService.getMakeNameList()
      .subscribe(data => {
        this.makeNameList$.next(data);
      })
  }

  getCars() {
    this._CarService.getCars(this.carQuery).pipe(
      tap(data=>{
        this.carsData$.next(data.data);
        this.totalCount$.next(data.totalCount);
      }),
      switchMap(()=>{
        return this._ModelService.getModelFilter(this.carQuery.makeName)
      })
    ).subscribe({
      next:(data)=>this.modelNameList$.next(data)
    })
  }

  getModelFilter(makeNames: string[]) {
    this._ModelService.getModelFilter(makeNames)
      .subscribe(data => {
        this.modelNameList$.next(data)
      })
  }
}
