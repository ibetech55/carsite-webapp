import { Injectable } from '@angular/core';
import { IFeature, IFeatures } from '../../Interfaces/Form';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})



export class FormService {
  private readonly _features = new BehaviorSubject<IFeatures[]>([]);

  features$ = this._features.asObservable();
  /**
   *
   */
  constructor(private readonly _Http: HttpClient) {

  }
  getFeatures() {
    this._Http.get<IFeatures[]>("http://localhost:5131/api/car-microservice/features").subscribe(data => {
      this._features.next(data)
    });
  }
}
