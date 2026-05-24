import { Component } from '@angular/core';
import { StepsComponent } from "../../components/sell-car-components/steps-component/steps-component";
import { SellCarForm } from '../../components/sell-car-components/sell-car-form/sell-car-form';
import { IMultipleImages, IStepIndex } from '../../Interfaces/Car/SellCar';
import { SellCarStepIndex } from '../../Constants/constants';
import { ButtonComponent } from "../../components/Shared/button-component/button-component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IColor } from '../../Interfaces/Shared';
import { SellCarFormService } from '../../Services/SellCarFormService/sell-car-form-service';

@Component({
  selector: 'app-sell-car-page',
  imports: [StepsComponent, SellCarForm, ButtonComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './sell-car-page.html',
  styleUrl: './sell-car-page.scss',
  providers: [SellCarFormService]
})
export class SellCarPage {

  constructor(private _SellCarFormService: SellCarFormService) {

  }
  stepIndex: IStepIndex = SellCarStepIndex[0];




  handleStepIndex(stepIndex: IStepIndex) {
    this.stepIndex = stepIndex;
  }

  handleSubmit() {
    this._SellCarFormService.submitCar();
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

  handlePreviousDisplay() {
    if (this.stepIndex.index === 0) return 'hide';
    return '';
  }

  handleNextDisplay() {
    if (this.stepIndex.index >= SellCarStepIndex.length-1) return 'hide';
    return '';
  }
}
