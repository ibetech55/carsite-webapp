import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMakeList } from '../../Interfaces/Makes';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MakeService {
  /**
   *
   */

  private readonly _URL = `${environment.BRAND_MS_API}/make`;

  constructor(private readonly _HTTP: HttpClient) {
  }

  getMakeNameList(): Observable<IMakeList[]> {
    return this._HTTP.get<IMakeList[]>(`${this._URL}/makeNameList`);
  }
}
