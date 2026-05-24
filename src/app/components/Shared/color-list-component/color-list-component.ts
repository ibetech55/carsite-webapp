import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { IColor } from '../../../Interfaces/Shared';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-list-component',
  imports: [OverlayModule, CommonModule],
  templateUrl: './color-list-component.html',
  styleUrl: './color-list-component.scss',
})
export class ColorListComponent {
  @Input() label!: string;
  @Input() colorList:IColor[] = [];
  isOpen = false;
  colorSelected:string = "";
  colorSelectedText!:string;
  @Output() handleCarColorEmitter = new EventEmitter<IColor>();

  handleColor(color:IColor){
    this.colorSelected = color.color;
    this.colorSelectedText = color.label;
    this.handleCarColorEmitter.emit(color);
  }
}
