import { Component, OnDestroy, OnInit } from '@angular/core';
import { CarDetailService } from '../../../Services/CarDetailService/car-detail-service';
import { CarDetailsService } from '../../../Services/CarDetailsService/car-details-service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-detail-images',
  imports: [AsyncPipe, CommonModule],
  templateUrl: './car-detail-images.html',
  styleUrl: './car-detail-images.scss',
})
export class CarDetailImages {
  /**
   *
   */
  public defaulImageUrl$!: Observable<string>;
  public imageUrls$!: Observable<string[]>;

  constructor(private readonly _CarDetailsService: CarDetailsService) {
  }


  ngOnInit(): void {
    this.defaulImageUrl$ = this._CarDetailsService.defaultImage$.asObservable();
    this.imageUrls$ = this._CarDetailsService.images$.asObservable();
  }

}
