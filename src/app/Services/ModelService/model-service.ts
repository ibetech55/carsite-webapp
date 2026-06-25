import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IModelFilterList, IModelList } from '../../Interfaces/Model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ModelService {

  /**
   *
   */
  constructor(private readonly _HTTP: HttpClient) {

  }
  private readonly _URL = environment.MODEL_API_URL;

  public getModelList(makeName: string): Observable<IModelList[]> {
    return this._HTTP.get<IModelList[]>(`${this._URL}/modelsByMakeName/${makeName}`);
  }

  getModelFilter(makeNames: string[]): Observable<IModelFilterList[]> {
    let params = new HttpParams();

    makeNames.forEach(name => {
      params = params.append("makeName", name)
    });
    return this._HTTP.get<IModelFilterList[]>(`${this._URL}/model-filters`, { params })
  }

}
