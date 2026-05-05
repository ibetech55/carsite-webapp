import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InputComponent } from "../../Shared/input-component/input-component";
import { SelectComponent } from "../../Shared/select-component/select-component";
import { IColor, ISelectOptions } from '../../../Interfaces/Shared';
import { GetYears } from '../../../Utils/GetYears';
import { SellCarColorInputs } from "../sell-car-color-inputs/sell-car-color-inputs";

@Component({
  selector: 'app-sell-car-details-form',
  imports: [InputComponent, SelectComponent, SellCarColorInputs],
  templateUrl: './sell-car-details-form.html',
  styleUrl: './sell-car-details-form.scss',
})
export class SellCarDetailsForm implements OnInit {

  yearOptions: ISelectOptions[] = [];
  @Output() handleCarColorEmitter = new EventEmitter<IColor>();

  ngOnInit(): void {
    this.yearOptions = GetYears.execute()
  }

}
