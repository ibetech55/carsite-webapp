import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICar, ICreateCarRequestBody } from '../../Interfaces/Car/Car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  /**
   *
   */
  private API_URL = "http://localhost:5131/api/car-microservice";
  constructor(private readonly _HTTP:HttpClient) {
  }

  createCar(requestBody: ICreateCarRequestBody): Observable<any>{
    return this._HTTP.post<ICreateCarRequestBody>(this.API_URL, requestBody);
  }

  getCarByCarCode(carCode: string){
    return this._HTTP.get<ICar>(`${this.API_URL}/${carCode}`);
  }
}
