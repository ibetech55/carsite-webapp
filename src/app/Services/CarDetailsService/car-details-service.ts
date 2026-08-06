import { Injectable, OnInit } from '@angular/core';
import { ImageService } from '../ImageService/image-service';
import { BehaviorSubject } from 'rxjs';
import { ICarDetailImages } from '../../Interfaces/Image';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CarService } from '../CarService/car-service';
import { ICarDetails } from '../../Interfaces/Car/Car';

@Injectable({
  providedIn: 'root',
})
export class CarDetailsService implements OnInit {
  /**
   *
   */

  public defaultImage$ = new BehaviorSubject<string>("");
  public images$ = new BehaviorSubject<string[]>([]);
  public carDetails$ = new BehaviorSubject<ICarDetails | undefined>(undefined);

  constructor(private readonly _ImageService: ImageService, private readonly _CarService:CarService) {
  }

  ngOnInit(): void {
  }

  getCarDetailImages(carCode:string){
    this._ImageService.getCarDetailImages(carCode)
        .subscribe(data=>{
          this.defaultImage$.next(data.defaultImageUrl);
          this.images$.next(data.imageUrls);
        })
  }

  getCarDetails(carCode:string){
    this._CarService.getCarDetails(carCode)
        .subscribe({
          next:(data)=>this.carDetails$.next(data)
        })
  }


}
