import { Injectable } from '@angular/core';
import { first, Observable, of } from 'rxjs';
import { IUser } from '../../Interfaces/User';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUser(): Observable<IUser> {
    return of({
      firstName:"Prince",
      lastName: "Ibewiro",
      phoneNumber:"90912345678",
      email: "pibewiro@yahoo.com",
      location: "Riverside, California",
      dealershipName: null,
      userCode:"Test",
      userType:"Test",
      userId:"1111",
      dateCreated: new Date(),
      active: true
    });
  }
}
