import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IColor, ISelectOptions } from '../../../Interfaces/Shared';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-component',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './select-component.html',
  styleUrl: './select-component.scss',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class SelectComponent {
  @Input() label!: string;
  @Input() controlName: string = ""
  @Input() options: ISelectOptions[] = []
  @Input() multiple: boolean = false;
  @Output() onChangeEmitter = new EventEmitter<string>();
  @Input() errorMessage!:string;
  @Input() hasError:boolean = false;
}
