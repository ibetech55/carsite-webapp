import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICarDetails } from '../../../Interfaces/Car/Car';
import { CarDetailsService } from '../../../Services/CarDetailsService/car-details-service';
import { CommonModule } from '@angular/common';
import { MoneyFormatterPipe } from '../../../Pipes/MoneyFormatter/money-formatter-pipe';
import { MilesFormatterPipe } from '../../../Pipes/MilesFormatter/miles-formatter-pipe';
import { CarDetail } from "../car-detail/car-detail";
import { ButtonComponent } from "../../Shared/button-component/button-component";

@Component({
  selector: 'app-car-details-info',
  imports: [CommonModule, MoneyFormatterPipe, MilesFormatterPipe, CarDetail, ButtonComponent],
  templateUrl: './car-details-info.html',
  styleUrl: './car-details-info.scss',
})
export class CarDetailsInfo implements OnInit {
  carDetails$!: Observable<ICarDetails | undefined>;

  /**
   *
   */
  constructor(private readonly _CarDetailsService: CarDetailsService) {
  }

  ngOnInit(): void {
    this.carDetails$ = this._CarDetailsService.carDetails$;
  }

  handleLocation(data:ICarDetails){
    return `${data.address.state}, ${data.address.city}`
  }
}
