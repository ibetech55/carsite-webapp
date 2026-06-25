import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICheckboxData } from '../../../Interfaces/Shared';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'filter-checkbox',
  imports: [MatCheckbox],
  templateUrl: './filter-checkbox.html',
  styleUrl: './filter-checkbox.scss',
})
export class FilterCheckbox {
  @Input() label!: string;
  @Input() value!: string;
  @Output() changeEmitter = new EventEmitter<ICheckboxData>();
  @Input() checked:boolean = false;
  @Input() total:number = 0;

  handleChange(value:MatCheckboxChange){
    this.changeEmitter.emit({value:value.source.value, checked:value.checked});
  }
}
