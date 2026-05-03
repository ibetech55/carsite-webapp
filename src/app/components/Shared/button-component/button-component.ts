import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatAnchor } from '@angular/material/button';

@Component({
  selector: 'app-button-component',
  imports: [MatAnchor],
  templateUrl: './button-component.html',
  styleUrl: './button-component.scss',
})
export class ButtonComponent {
  @Input() label: string = ""
  @Input() type: string = "button";
  @Output() onClick = new EventEmitter();
  @Input() btnBlock: boolean = false;

  handleEvent(data?: any) {
    this.onClick.emit("data");
  }
}
