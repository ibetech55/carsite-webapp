import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from "../../Shared/input-component/input-component";
import { SelectComponent } from "../../Shared/select-component/select-component";
import { ButtonComponent } from "../../Shared/button-component/button-component";
import { ISelectOptions } from '../../../Interfaces/Shared';
import { RegisterFormService } from '../../../Services/RegisterFormService/register-form-service';
import { IRegister } from '../../../Interfaces/Auth';
import { AuthService } from '../../../Services/AuthService/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule, InputComponent, SelectComponent, ButtonComponent],
  templateUrl: './register-form.html',
  styleUrl: './register-form.scss',
})
export class RegisterForm implements OnInit {

  /**
   *
   */
  constructor(private readonly _RegisterFormService: RegisterFormService,
    private readonly _AuthService: AuthService, private readonly _Router:Router) {
  }
  ngOnInit(): void {
    this.getStatesOptions();
  }


  private stateCodeSelected: string = "";
  public stateOptions: ISelectOptions[] = [];
  public cityOptions: ISelectOptions[] = [];
  public registerForm = new FormGroup({
    firstName: new FormControl("", { nonNullable: true }),
    lastName: new FormControl("", { nonNullable: true }),
    email: new FormControl("", { nonNullable: true }),
    username: new FormControl("", { nonNullable: true }),
    userType: new FormControl("", { nonNullable: true }),
    streetAddress: new FormControl("", { nonNullable: true }),
    city: new FormControl("", { nonNullable: true }),
    state: new FormControl("", { nonNullable: true }),
    zipCode: new FormControl("", { nonNullable: true }),
    password: new FormControl("", { nonNullable: true }),
    confirmPassword: new FormControl("", { nonNullable: true }),
    phoneNumber: new FormControl("", { nonNullable: true }),
  });

  userTypeOptions: ISelectOptions[] = [
    {
      label: "Private User",
      value: "private-user"
    },
    {
      label: "Dealership",
      value: "dealership"
    }
  ];

  handleStateSelected(value: string) {
    this.stateCodeSelected = value;
    this.cityOptions = [];
    this._RegisterFormService.getCities(this.stateCodeSelected)
      .subscribe(data => {
        data.forEach(city => {
          this.cityOptions.push({
            value: city.name,
            label: city.name
          })
        })
      })
  }

  getStatesOptions() {
    this._RegisterFormService.getStates()
      .subscribe(data => {
        data.forEach(state => {
          this.stateOptions.push({
            value: state.stateCode,
            label: state.name
          })
        })
      })


  }

  handleRegistration() {

    const formValues = this.registerForm.getRawValue();

    if (formValues.password !== formValues.confirmPassword) {
      alert("Password and confirm password dont match")
    } else {

      const requestPayload: IRegister = {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        username: formValues.username,
        phoneNumber: formValues.phoneNumber,
        userType: formValues.userType,
        email: formValues.email,
        password: formValues.password,
        address: {
          state: formValues.state,
          city: formValues.city,
          streetAddress: formValues.streetAddress,
          zipCode: formValues.zipCode
        }
      };

      this._AuthService.registerUser(requestPayload)
        .subscribe(data => {
          if (data.succeeded) {
            this.registerForm.reset();
            alert("User Created");
            this._Router.navigate(["/login"])
          }
        })
    }
  }
}
