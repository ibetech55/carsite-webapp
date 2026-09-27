import { Component } from '@angular/core';
import { InputComponent } from "../../Shared/input-component/input-component";
import { ButtonComponent } from "../../Shared/button-component/button-component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm {
  public loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  })

  handleLogin(){}
}
