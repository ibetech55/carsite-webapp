import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SellCarStepIndex } from '../../../Constants/constants';
import { IStepIndex } from '../../../Interfaces/SellCar';

@Component({
  selector: 'app-steps-component',
  imports: [CommonModule],
  templateUrl: './steps-component.html',
  styleUrl: './steps-component.scss',
})
export class StepsComponent {
  @Output() handleStepIndexEmitter = new EventEmitter<IStepIndex>();
  @Input() stepIndex:IStepIndex = SellCarStepIndex[0];

  steps:IStepIndex[] = SellCarStepIndex;


}
