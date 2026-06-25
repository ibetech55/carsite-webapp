import { Component, OnInit } from '@angular/core';
import { BuyCarService } from '../../../../Services/BuyCarService/buy-car-service';
import { BehaviorSubject } from 'rxjs';
import { IModelFilterList } from '../../../../Interfaces/Model';
import { CommonModule } from '@angular/common';
import { FilterCheckbox } from '../../../Shared/filter-checkbox/filter-checkbox';
import { ICheckboxData } from '../../../../Interfaces/Shared';

@Component({
  selector: 'app-model-filters',
  imports: [CommonModule, FilterCheckbox],
  templateUrl: './model-filters.html',
  styleUrl: './model-filters.scss',
})
export class ModelFilters implements OnInit {

  modelFilters$ = new BehaviorSubject<IModelFilterList[]>([])
  /**
   *
   */
  constructor(private readonly _BuyCarService: BuyCarService) {

  }

  ngOnInit(): void {
    this.modelFilters$ = this._BuyCarService.modelNameList$
  }

  handleChange(value: ICheckboxData) {
    const checked = value.checked;
    const val = value.value;
    const index = this._BuyCarService.carQuery.modelName.indexOf(val);

    if (checked && !this._BuyCarService.carQuery.modelName.includes(val)) {
      this._BuyCarService.carQuery.modelName?.push(val);
    } else {
      this._BuyCarService.carQuery.modelName.splice(index, 1);
    }

    this._BuyCarService.getCars();
  }

  handleChecked(value: string) {
    return this._BuyCarService.carQuery.modelName.includes(value)
  }


}
