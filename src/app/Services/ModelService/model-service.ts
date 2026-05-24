import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IModelList } from '../../Interfaces/Model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ModelService {

  /**
   *
   */
  constructor(private readonly _HTTP:HttpClient) {
    
  }
  private readonly _URL = environment.MODEL_API_URL;

  public getModelList(makeName:string): Observable<IModelList[]>{
    return this._HTTP.get<IModelList[]>(`${this._URL}/modelsByMakeName/${makeName}`);
  }

}
