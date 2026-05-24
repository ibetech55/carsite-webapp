import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { ControlContainer, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckbox, MatCheckboxChange } from "@angular/material/checkbox";
import { ICheckboxData } from '../../../Interfaces/Shared';

@Component({
  selector: 'app-checkbox-component',
  imports: [MatCheckbox, ReactiveFormsModule, FormsModule],
  templateUrl: './checkbox-component.html',
  styleUrl: './checkbox-component.scss',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class CheckboxComponent {
  @Input() label!: string;
  @Input() value!: string;
  @Input() controlName!: string;
  @Input() labelPosition: 'before' | 'after' = 'after';
  @Output() changeEmitter = new EventEmitter<ICheckboxData>();
  @Input() checked:boolean = false;

  handleChange(data: MatCheckboxChange) {
    this.changeEmitter.emit({
      value: data.source.value,
      checked: data.checked
    });
  }
}
