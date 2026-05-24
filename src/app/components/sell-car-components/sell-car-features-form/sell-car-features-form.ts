import { Component, OnInit } from '@angular/core';
import { CheckboxComponent } from "../../Shared/checkbox-component/checkbox-component";
import { FormService } from '../../../Services/FormService/form-service';
import { IFeatures } from '../../../Interfaces/Form';
import { CommonModule } from '@angular/common';
import { SellCarFormService } from '../../../Services/SellCarFormService/sell-car-form-service';
import { ICheckboxData } from '../../../Interfaces/Shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sell-car-features-form',
  imports: [CheckboxComponent, CommonModule],
  templateUrl: './sell-car-features-form.html',
  styleUrl: './sell-car-features-form.scss',
})
export class SellCarFeaturesForm implements OnInit {
  /**
   *
   */
  constructor(private readonly _FormService: FormService, private readonly _SellCarFormService: SellCarFormService) {
  }

  features$!: Observable<IFeatures[]>;
  featuresSelected: string[] = [];

  ngOnInit() {
    this.getFeatures();
    this.featuresSelected = this._SellCarFormService.sellCarForm.get("features")?.getRawValue();
  }

  getFeatures() {
    this.features$ = this._FormService.features$;
  }

  addFeature(data: ICheckboxData) {
    const value = data.value;

    if(data.checked){
      this.featuresSelected.push(value);
    } else {
      const idx = this.featuresSelected.indexOf(value);
      this.featuresSelected.splice(idx, 1);
    }

    this._SellCarFormService.sellCarForm.patchValue({ features: this.featuresSelected })
  }

  handleChecked(value: string): boolean {
    return this._SellCarFormService.sellCarForm.get("features")?.getRawValue()?.includes(value);
  }

}
