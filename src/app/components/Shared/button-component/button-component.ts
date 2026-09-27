import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-button-component',
  imports: [MatAnchor, CommonModule, FontAwesomeModule, NgClass],
  templateUrl: './button-component.html',
  styleUrl: './button-component.scss',
})
export class ButtonComponent {
  @Input() label: string = ""
  @Input() type: string = "button";
  @Output() onClick = new EventEmitter();
  @Input() btnBlock: boolean = false;
  @Input() btnLight: boolean = false;
  @Input() icon!: string;


  handleEvent(data?: any) {
    this.onClick.emit("data");
  }
}
