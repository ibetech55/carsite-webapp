import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegister, IRegisterResponse } from '../../Interfaces/Auth';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  /**
   *
   */
  constructor(private readonly _HTTP:HttpClient) {
    
  }

  private readonly AUTH_URL = environment.AUTH_URL

  registerUser(payload:IRegister):Observable<IRegisterResponse>{
    return this._HTTP.post<IRegisterResponse>(`${this.AUTH_URL}/register`, payload);
  }
}
