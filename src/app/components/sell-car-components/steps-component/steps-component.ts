import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SellCarStepIndex } from '../../../Constants/constants';
import { IStepIndex } from '../../../Interfaces/Car/SellCar';
import { SellCarFormService } from '../../../Services/SellCarFormService/sell-car-form-service';

interface IControlName {
  Details: string[];
  Price: string[];
}
@Component({
  selector: 'app-steps-component',
  imports: [CommonModule],
  templateUrl: './steps-component.html',
  styleUrl: './steps-component.scss',
})
export class StepsComponent {
  /**
   *
   */
  constructor(private _SellCarFormService: SellCarFormService) {

  }
  @Output() handleStepIndexEmitter = new EventEmitter<IStepIndex>();
  @Input() stepIndex: IStepIndex = SellCarStepIndex[0];

  steps: IStepIndex[] = SellCarStepIndex;

  private controlNames = {
    Details: ["make", "model", "year"],
    Price: ["price"],
    ["Personal Information"]: ["vin"],
    Condition: ["condition"],
    Images: ["defaultImage"]
  }

  checkErrors(label: string): boolean {
    const controls = this.controlNames[label as keyof typeof this.controlNames];

    if (!controls) return false;

    return controls.some(name => {
      const control = this._SellCarFormService.sellCarForm.get(name);
      return control?.invalid && control?.touched;
    });
  }
}
