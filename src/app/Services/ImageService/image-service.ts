import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGetPresignedUrl, IImageRequestBody } from '../../Interfaces/Image';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private API_URL:string = "http://localhost:5131/api/car-microservice/image"
  /**
   *
   */
  constructor(private readonly _Http:HttpClient) {
    
  }

  public getPresignedUrl(length:number):Observable<IGetPresignedUrl[]>{
    return this._Http.get<IGetPresignedUrl[]>(`${this.API_URL}/get-presigned-urls/${length}`);
  }

  public uploadCarImagesS3(url:string, image:File)
  {
    return this._Http.put(url, image);
  }

  public createMultipleImages(carCode:string, imageData:IImageRequestBody[]):Observable<boolean> {
    return this._Http.post<boolean>(`${this.API_URL}/${carCode}`, imageData);
  }
}
