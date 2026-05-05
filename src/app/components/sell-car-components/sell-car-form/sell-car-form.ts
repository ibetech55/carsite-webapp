import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SellCarStepIndex } from '../../../Constants/constants';
import { IMultipleImages, IStepIndex } from '../../../Interfaces/SellCar';
import { SellCarDetailsForm } from "../sell-car-details-form/sell-car-details-form";
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { SellCarPriceForm } from "../sell-car-price-form/sell-car-price-form";
import { SellCarImageForm } from "../sell-car-image-form/sell-car-image-form";
import { IColor } from '../../../Interfaces/Shared';
@Component({
  selector: 'app-sell-car-form',
  imports: [CommonModule, SellCarDetailsForm, ReactiveFormsModule, FormsModule, DragDropModule, SellCarPriceForm, SellCarImageForm],
  templateUrl: './sell-car-form.html',
  styleUrl: './sell-car-form.scss',
})
export class SellCarForm {
  @Input() stepIndex: IStepIndex = SellCarStepIndex[0];
  @Input() sellCarForm!: FormGroup;
  @Output() handleFileSelected = new EventEmitter<File>();
  @Output() handleMulipleImageData = new EventEmitter<IMultipleImages[]>();
  @Input() multipleImages!:IMultipleImages[]
  @Output() handleCarColor = new EventEmitter<IColor>();

}
