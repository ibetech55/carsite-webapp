import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-text-area-component',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './text-area-component.html',
  styleUrl: './text-area-component.scss',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})

export class TextAreaComponent {
  @Input() label!: string;
  @Input() rows: number = 8;
  @Input() controlName!: string;
}
