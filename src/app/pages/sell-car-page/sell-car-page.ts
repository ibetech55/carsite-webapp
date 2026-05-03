import { Component } from '@angular/core';
import { StepsComponent } from "../../components/sell-car-components/steps-component/steps-component";
import { SellCarForm } from '../../components/sell-car-components/sell-car-form/sell-car-form';
import { IStepIndex } from '../../Interfaces/SellCar';
import { SellCarStepIndex } from '../../Constants/constants';
import { ButtonComponent } from "../../components/Shared/button-component/button-component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sell-car-page',
  imports: [StepsComponent, SellCarForm, ButtonComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './sell-car-page.html',
  styleUrl: './sell-car-page.scss',
})
export class SellCarPage {
  stepIndex: IStepIndex = SellCarStepIndex[0];

  sellCarForm = new FormGroup({
    make: new FormControl("", { nonNullable: true }),
    model: new FormControl("", { nonNullable: true }),
    year: new FormControl("", { nonNullable: true }),
    transmission: new FormControl("", { nonNullable: true }),
    drivetrain: new FormControl("", { nonNullable: true }),
    engine: new FormControl("", { nonNullable: true }),
    mileage: new FormControl("", { nonNullable: true }),
    price: new FormControl("", { nonNullable: true })
  });

  handleStepIndex(stepIndex: IStepIndex) {
    this.stepIndex = stepIndex;
  }

  handleSubmit() {
    console.log(this.sellCarForm);
  }

  handlePrev() {
    if (this.stepIndex.index > 0) {
      this.stepIndex = SellCarStepIndex[this.stepIndex.index - 1]
    }
  }

  handleNext() {
    if (this.stepIndex.index < SellCarStepIndex.length - 1) {
      this.stepIndex = SellCarStepIndex[this.stepIndex.index + 1]
    }
  }
}
