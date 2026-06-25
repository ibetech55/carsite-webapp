import { Component, OnInit } from '@angular/core';
import { CheckboxComponent } from "../../../Shared/checkbox-component/checkbox-component";
import { BuyCarService } from '../../../../Services/BuyCarService/buy-car-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IMakeList } from '../../../../Interfaces/Makes';
import { FilterCheckbox } from '../../../Shared/filter-checkbox/filter-checkbox';
import { ICheckboxData } from '../../../../Interfaces/Shared';
import { ICarQuery } from '../../../../Interfaces/Car/Car';

@Component({
  selector: 'app-make-filter',
  imports: [CommonModule, FilterCheckbox],
  templateUrl: './make-filter.html',
  styleUrl: './make-filter.scss',
})
export class MakeFilter implements OnInit {
  makes$ = new BehaviorSubject<IMakeList[]>([]);

  /**
   *
   */
  constructor(private readonly _BuyCarService: BuyCarService) {

  }

  ngOnInit(): void {
    this._BuyCarService.getMakeList();
    this.makes$ = this._BuyCarService.makeNameList$;
  }

  handleChanged(value: ICheckboxData) {
    const checked = value.checked;
    const val = value.value;
    if (checked) {
      this._BuyCarService.carQuery?.makeName?.push(val);


    } else {
      const index = this._BuyCarService.carQuery.makeName?.indexOf(val);
      if (index > -1) {
        this._BuyCarService.carQuery.makeName?.splice(index, 1);
      }
    }

    this._BuyCarService.getCars();
  }



}
