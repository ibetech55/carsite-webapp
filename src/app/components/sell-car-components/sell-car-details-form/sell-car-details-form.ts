import { Component, OnInit } from '@angular/core';
import { InputComponent } from "../../Shared/input-component/input-component";
import { SelectComponent } from "../../Shared/select-component/select-component";
import { ISelectOptions } from '../../../Interfaces/Shared';
import { GetYears } from '../../../Utils/GetYears';

@Component({
  selector: 'app-sell-car-details-form',
  imports: [InputComponent, SelectComponent],
  templateUrl: './sell-car-details-form.html',
  styleUrl: './sell-car-details-form.scss',
})
export class SellCarDetailsForm implements OnInit {

  yearOptions: ISelectOptions[] = [];

  ngOnInit(): void {
    this.yearOptions = GetYears.execute()
  }

}
