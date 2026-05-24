import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ICity, IState } from '../../Interfaces/Location';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private readonly _URL = environment.LOCATION_API_URL;

  /**
   *
   */
  constructor(private readonly _HTTP: HttpClient) {

  }

  public getStates(): Observable<IState[]> {
    return this._HTTP.get<IState[]>(`${this._URL}/states`);
  }

  public getCities(stateCode:string): Observable<ICity[]> {
    return this._HTTP.get<ICity[]>(`${this._URL}/cities/${stateCode}`);
  }

}
