import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ISelectOptions } from '../../../Interfaces/Shared';

@Component({
  selector: 'app-select-component',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule],
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
}
