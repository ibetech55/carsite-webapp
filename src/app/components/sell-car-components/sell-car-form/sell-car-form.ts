import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SellCarStepIndex } from '../../../Constants/constants';
import { IMultipleImages, IStepIndex } from '../../../Interfaces/Car/SellCar';
import { SellCarDetailsForm } from "../sell-car-details-form/sell-car-details-form";
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { SellCarPriceForm } from "../sell-car-price-form/sell-car-price-form";
import { SellCarImageForm } from "../sell-car-image-form/sell-car-image-form";
import { IColor, ISelectOptions } from '../../../Interfaces/Shared';
import { SellCarFormService } from '../../../Services/SellCarFormService/sell-car-form-service';
import { SellCarConditionsForm } from "../sell-car-conditions-form/sell-car-conditions-form";
import { SellCarCommentForm } from "../sell-car-comment-form/sell-car-comment-form";
import { SellCarPersonalInfoForm } from "../sell-car-personal-info-form/sell-car-personal-info-form";
import { UserService } from '../../../Services/UserService/user-service';
import { SellCarFeaturesForm } from "../sell-car-features-form/sell-car-features-form";
import { FormService } from '../../../Services/FormService/form-service';
import { Observable } from 'rxjs';
import { IFeatures } from '../../../Interfaces/Form';
@Component({
  selector: 'app-sell-car-form',
  imports: [CommonModule, SellCarDetailsForm, ReactiveFormsModule, FormsModule, DragDropModule, SellCarPriceForm, SellCarImageForm, SellCarConditionsForm, SellCarCommentForm, SellCarPersonalInfoForm, SellCarFeaturesForm],
  templateUrl: './sell-car-form.html',
  styleUrl: './sell-car-form.scss'
})
export class SellCarForm implements OnInit {
  /**
   *
   */
  constructor(public _SellCarFormService: SellCarFormService, private _FormService: FormService) {
  }


  @Input() stepIndex: IStepIndex = SellCarStepIndex[0];
  sellCarForm!: FormGroup;

  ngOnInit(): void {
    this.sellCarForm = this._SellCarFormService.sellCarForm;
    this._SellCarFormService.sellCarForm.get("modelName")?.disable();
    this._SellCarFormService.sellCarForm.get("city")?.disable();
    this._SellCarFormService.getMakeOptions();
    this._SellCarFormService.setUser();
    this._FormService.getFeatures();
  }
}
