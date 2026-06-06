import { Component, Input, OnInit } from '@angular/core';
import { ICar } from '../../../../Interfaces/Car/Car';
import { CarDetailService } from '../../../../Services/CarDetailService/car-detail-service';
import { CommonModule } from '@angular/common';
import { Detail } from '../../../Shared/detail/detail';

@Component({
  selector: 'app-garage-car-details',
  imports: [CommonModule, Detail],
  templateUrl: './garage-car-details.html',
  styleUrl: './garage-car-details.scss',
})

export class GarageCarDetails implements OnInit {
  public car:ICar | null = null;
    /**
     *
     */
    constructor(private readonly _CarDetailService:CarDetailService) {
      
    }

  ngOnInit(): void {
   this._CarDetailService.car$.subscribe(data=>{
    this.car = data;
   })
  }
}
