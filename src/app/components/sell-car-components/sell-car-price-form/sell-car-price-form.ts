import { Component } from '@angular/core';
import { InputComponent } from "../../Shared/input-component/input-component";
import { SellCarFormService } from '../../../Services/SellCarFormService/sell-car-form-service';

@Component({
  selector: 'app-sell-car-price-form',
  imports: [InputComponent],
  templateUrl: './sell-car-price-form.html',
  styleUrl: './sell-car-price-form.scss',
})
export class SellCarPriceForm {
  /**
   *
   */
  constructor(private _SellCarFormService: SellCarFormService) {

  }
  getHasError(controlName: keyof typeof this._SellCarFormService.sellCarForm.controls) {
    return this._SellCarFormService.hasErrors(controlName);
  }

  getErrorMessages(controlName: keyof typeof this._SellCarFormService.sellCarForm.controls) {
    return this._SellCarFormService.checkErrors(controlName);
  }
}
