import { Component, Input } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { IRadioOptions } from '../../../Interfaces/Shared';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-buttons',
  imports: [MatRadioModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './radio-buttons.html',
  styleUrl: './radio-buttons.scss',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class RadioButtons {
  @Input() label!: string;
  @Input() options: IRadioOptions[] = [];
  @Input() controlName!: string;
  @Input() hasError: boolean = false;
  @Input() errorMessage!: string;
}
