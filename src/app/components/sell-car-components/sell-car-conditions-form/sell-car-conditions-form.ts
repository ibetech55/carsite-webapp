import { Component } from '@angular/core';
import { RadioButtons } from "../../Shared/radio-buttons/radio-buttons";
import { IRadioOptions, ISelectOptions } from '../../../Interfaces/Shared';
import { SellCarFormService } from '../../../Services/SellCarFormService/sell-car-form-service';

@Component({
  selector: 'app-sell-car-conditions-form',
  imports: [RadioButtons],
  templateUrl: './sell-car-conditions-form.html',
  styleUrl: './sell-car-conditions-form.scss',
})
export class SellCarConditionsForm {
  /**
   *
   */
  constructor(private _SellCarFormService: SellCarFormService) {

  }
  conditionOptions: IRadioOptions[] = [
    {
      label: 'Excellent',
      value: 'Excellent'
    },
    {
      label: 'Very Good',
      value: 'Very Good'
    },
    {
      label: 'Good',
      value: 'Good'
    },
    {
      label: 'Fair',
      value: 'Fair'
    }
  ];

  accidentOptions: IRadioOptions[] = [
    {
      label: 'Yes',
      value: 'Yes'
    },
    {
      label: 'No',
      value: 'No'
    }
  ];

  historyOptions: IRadioOptions[] = [
    {
      label: 'Yes',
      value: 'Yes'
    },
    {
      label: 'No',
      value: 'No'
    }
  ];

  issueOptions: IRadioOptions[] = [
    {
      label: 'Yes',
      value: 'Yes'
    },
    {
      label: 'No',
      value: 'No'
    }
  ];

  getHasError(controlName: keyof typeof this._SellCarFormService.sellCarForm.controls): boolean {
    return this._SellCarFormService.hasErrors(controlName)
  }

  getErrorMessages(controlName: keyof typeof this._SellCarFormService.sellCarForm.controls) {
    return this._SellCarFormService.checkErrors(controlName);
  }
}
