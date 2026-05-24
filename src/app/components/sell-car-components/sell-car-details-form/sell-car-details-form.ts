import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InputComponent } from "../../Shared/input-component/input-component";
import { SelectComponent } from "../../Shared/select-component/select-component";
import { IColor, IRadioOptions, ISelectOptions } from '../../../Interfaces/Shared';
import { GetYears } from '../../../Utils/GetYears';
import { SellCarColorInputs } from "../sell-car-color-inputs/sell-car-color-inputs";
import { SellCarFormService } from '../../../Services/SellCarFormService/sell-car-form-service';
import { IState } from '../../../Interfaces/Location';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RadioButtons } from "../../Shared/radio-buttons/radio-buttons";

@Component({
  selector: 'app-sell-car-details-form',
  imports: [CommonModule, InputComponent, SelectComponent, SellCarColorInputs, RadioButtons],
  templateUrl: './sell-car-details-form.html',
  styleUrl: './sell-car-details-form.scss',
})
export class SellCarDetailsForm implements OnInit {

  /**
   *
   */
  constructor(public _SellCarFormService: SellCarFormService) {
  }

  yearOptions: ISelectOptions[] = [];
  modelOptions: ISelectOptions[] = [];
  stateOptions: ISelectOptions[] = [];
  cityOptions: ISelectOptions[] = [];
  transmissionOptions: ISelectOptions[] = [
    {
      label: 'Automatic',
      value: 'automatic'
    },
    {
      label: 'Manual',
      value: 'manual'
    },
  ];
  private stateCodeSelected = "";
  @Output() handleCarColorEmitter = new EventEmitter<IColor>();
  private stateList: IState[] = [];

  makeOptions$!: Observable<ISelectOptions[]>;
  modelOptions$!: Observable<ISelectOptions[]>;

  paymentOptions: IRadioOptions[] = [
    {
      label: 'Yes',
      value: 'Yes'
    },
    {
      label: 'No',
      value: 'No'
    }
  ]

  ngOnInit(): void {
    this.yearOptions = GetYears.execute()
    this.getMakeOptions();
    this.getStateOptions();

    if (this._SellCarFormService.makeSelected) {
      this._SellCarFormService.getModelOptions();
      this.setModelOptions();
    }
  }

  private getMakeOptions() {
    this.makeOptions$ = this._SellCarFormService._makeOptions;
  }

  private setModelOptions() {
    this.modelOptions$ = this._SellCarFormService._modelOptions;
  }

  private getStateOptions() {
    this._SellCarFormService.getStateOptions()
      .subscribe(data => {
        if (data) {
          data.forEach(d => {
            this.stateList = data;
            this.stateOptions.push({
              value: d.name,
              label: d.name
            })
          })
        }
      })
  }

  handleMakeChange(data: string) {
    this._SellCarFormService.makeSelected = data;
    this._SellCarFormService.sellCarForm.get("modelName")?.enable();
    this._SellCarFormService.getModelOptions();
    this.setModelOptions();
  }

  setCityOptions() {
    this._SellCarFormService.getCities(this.stateCodeSelected)
      .subscribe(cities => {
        cities.forEach(city => {
          this.cityOptions.push({
            label: city.name,
            value: city.name
          })
        })
      })
  }

  handleStateChanged(stateName: string) {
    this.stateCodeSelected = this.getStateCode(stateName);
    this._SellCarFormService.sellCarForm.get("city")?.enable();
    this.setCityOptions();
  }

  private getStateCode(stateName: string) {
    return this.stateList.find(state => state.name === stateName)?.stateCode ?? "";
  }

  checkRequiredError(controlName: keyof typeof this._SellCarFormService.sellCarForm.controls): boolean {
    return this._SellCarFormService.hasErrors(controlName);
  }

  getErrorMessage(controlName: keyof typeof this._SellCarFormService.sellCarForm.controls): string {
   return this._SellCarFormService.checkErrors(controlName)
  }
}
