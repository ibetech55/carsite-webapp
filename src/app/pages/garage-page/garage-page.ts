import { Component, OnInit } from '@angular/core';
import { CarService } from '../../Services/CarService/car-service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { GarageCarDetails } from '../../components/Garage-Components/Garage-Page/garage-car-details/garage-car-details';
import { CarDetailService } from '../../Services/CarDetailService/car-detail-service';
import { GarageCarImages } from '../../components/Garage-Components/Garage-Page/garage-car-images/garage-car-images';

@Component({
  selector: 'app-garage-page',
  imports: [CommonModule, GarageCarDetails, GarageCarImages],
  templateUrl: './garage-page.html',
  styleUrl: './garage-page.scss',
})
export class GaragePage implements OnInit {
  private carCode = "";
  public header$ = new BehaviorSubject("");
  /**
   *
   */
  constructor(private readonly _CarDetailService: CarDetailService, private readonly _Route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this._Route.paramMap
      .subscribe(params => {
        this.carCode = params.get('carCode') ?? ""
        this.header$ = this._CarDetailService.header$;
        this._CarDetailService.getCarByCarCode(this.carCode);
      })
  }




}
