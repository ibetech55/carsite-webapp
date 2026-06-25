import { Component, OnInit } from '@angular/core';
import { CarDetailService } from '../../../../Services/CarDetailService/car-detail-service';
import { IImage } from '../../../../Interfaces/Image';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-garage-car-images',
  imports: [CommonModule],
  templateUrl: './garage-car-images.html',
  styleUrl: './garage-car-images.scss',
})
export class GarageCarImages implements OnInit {
  /**
   *
   */
  public images: IImage[] = [];
  constructor(private _CarDetailsService: CarDetailService) {

  }
  ngOnInit(): void {
    this._CarDetailsService.images$
      .subscribe(data => {
        this.images = data.sort((a,b)=>a.position - b.position);
      })
  }

}
