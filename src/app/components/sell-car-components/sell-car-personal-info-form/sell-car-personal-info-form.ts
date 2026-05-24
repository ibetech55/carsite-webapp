import { Component, OnInit } from '@angular/core';
import { InputComponent } from "../../Shared/input-component/input-component";
import { SellCarFormService } from '../../../Services/SellCarFormService/sell-car-form-service';
import { FormsModule } from "@angular/forms";
import { UserService } from '../../../Services/UserService/user-service';

@Component({
  selector: 'app-sell-car-personal-info-form',
  imports: [InputComponent, FormsModule],
  templateUrl: './sell-car-personal-info-form.html',
  styleUrl: './sell-car-personal-info-form.scss',
})
export class SellCarPersonalInfoForm implements OnInit {
  /**
   *
   */
  constructor(private readonly _SellCarFormService: SellCarFormService) {
  }
  ngOnInit(): void {
    this._SellCarFormService.sellCarForm.get("email")?.disable();
    this._SellCarFormService.sellCarForm.get("phoneNumber")?.disable();
    this._SellCarFormService.sellCarForm.get("location")?.disable();
    this._SellCarFormService.sellCarForm.get("seller")?.disable();
  }

  gethasError(controlName: keyof typeof this._SellCarFormService.sellCarForm.controls) {
    return this._SellCarFormService.hasErrors(controlName);
  }

  getErrorMessage(controlName: keyof typeof this._SellCarFormService.sellCarForm.controls) {
    return this._SellCarFormService.checkErrors(controlName);
  }
}
