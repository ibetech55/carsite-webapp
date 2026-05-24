import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective, FormsModule, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input-component',
  imports: [MatFormFieldModule, MatFormField, MatInputModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './input-component.html',
  styleUrl: './input-component.scss',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class InputComponent {
  @Input() id!: string;
  @Input() label!: string;
  @Input() controlName: string = "";
  @Input() type: string = "text";
  @Input() disabled: boolean = false;
  @Input() errorMessage!: string;
  @Input() hasError: boolean = false;
}
