import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICar, ICarQuery, ICreateCarRequestBody, IViewCar } from '../../Interfaces/Car/Car';
import { Observable } from 'rxjs';
import { IPagination } from '../../Interfaces/Shared';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  /**
   *
   */
  private API_URL = "http://localhost:5131/api/car-microservice";
  constructor(private readonly _HTTP: HttpClient) {
  }

  getCars(query?: ICarQuery): Observable<IPagination<IViewCar[]>> {
    let params = new HttpParams();

    if (query) {
      if (query.makeName && query.makeName?.length > 0) {
        query.makeName.forEach(name => {
          params = params.append("makeName", name);
        })
      }

      if (query.modelName && query.modelName?.length > 0) {
        query.modelName.forEach(name => {
          params = params.append("modelName", name);
        })
      }

      if (query?.minYear && query?.minYear > 0) {
        params = params.append("minYear", query.minYear);
      }

      if (query?.maxYear && query?.maxYear > 0) {
        params = params.append("maxYear", query.maxYear);
      }

      if (query?.minPrice && query?.minPrice > 0) {
        params = params.append("minPrice", query.minPrice);
      }

      if (query?.maxPrice && query?.maxPrice > 0) {
        params = params.append("maxPrice", query.maxPrice);
      }

      if (query?.searchRadius) {
        params = params.append("searchRadius", query.searchRadius);
      }

      if (query?.zipCode) {
        params = params.append("zipCode", query.zipCode);
      }
    }


    return this._HTTP.get<IPagination<IViewCar[]>>(`${this.API_URL}/view-cars`, { params });
  }

  createCar(requestBody: ICreateCarRequestBody): Observable<any> {
    return this._HTTP.post<ICreateCarRequestBody>(this.API_URL, requestBody);
  }

  getCarByCarCode(carCode: string) {
    return this._HTTP.get<ICar>(`${this.API_URL}/${carCode}`);
  }
}
