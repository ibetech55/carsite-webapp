import { Injectable } from '@angular/core';
import { LocationService } from '../LocationService/location-service';

@Injectable({
  providedIn: 'root',
})
export class RegisterFormService {

  /**
   *
   */
  constructor(private readonly _LocationService:LocationService) {
    
  }

  getStates(){
    return this._LocationService.getStates();
  }

  getCities(stateCode:string){
    return this._LocationService.getCities(stateCode);
  }
  
}
