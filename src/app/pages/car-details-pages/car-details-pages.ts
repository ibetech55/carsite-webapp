import { Component } from '@angular/core';
import { CarDetailImages } from "../../components/car-details-components/car-detail-images/car-detail-images";
import { ActivatedRoute } from '@angular/router';
import { CarDetailsService } from '../../Services/CarDetailsService/car-details-service';
import { CarDetailsInfo } from "../../components/car-details-components/car-details-info/car-details-info";

@Component({
  selector: 'app-car-details-pages',
  imports: [CarDetailImages, CarDetailsInfo],
  templateUrl: './car-details-pages.html',
  styleUrl: './car-details-pages.scss',
})
export class CarDetailsPages {
  carCode = ""
  constructor(private readonly _Route: ActivatedRoute, private readonly _CarDetailsService: CarDetailsService) {
    this.carCode = this._Route.snapshot.paramMap.get("carCode") ?? ""
  }


  ngOnInit(): void {
    this._CarDetailsService.getCarDetailImages(this.carCode);
    this._CarDetailsService.getCarDetails(this.carCode);

  }

  ngOnDestroy(): void {
    this._CarDetailsService.defaultImage$.next("");
    this._CarDetailsService.images$.next([])
  }
}
