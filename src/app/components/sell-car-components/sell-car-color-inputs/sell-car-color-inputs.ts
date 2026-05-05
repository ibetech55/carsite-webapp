import { Component, EventEmitter, Output } from '@angular/core';
import { ColorListComponent } from "../color-list-component/color-list-component";
import { IColor } from '../../../Interfaces/Shared';

@Component({
  selector: 'app-sell-car-color-inputs',
  imports: [ColorListComponent],
  templateUrl: './sell-car-color-inputs.html',
  styleUrl: './sell-car-color-inputs.scss',
})
export class SellCarColorInputs {

  @Output() handleCarColorEmitter = new EventEmitter<IColor>();
  exteriorColors: IColor[] = [
  { label: "Black", color: "black" },
  { label: "Grey", color: "grey" },
  { label: "White", color: "white" },
  { label: "Silver", color: "silver" },
  { label: "Red", color: "red" },
  { label: "Charcoal Gray", color: "#747675" },
  { label: "Beige", color: "beige" },
  { label: "Gold", color: "gold" },
  { label: "Tan", color: "tan" },
  { label: "Brown", color: "brown" },
  { label: "Burgundy", color: "#800020" },
  { label: "Orange", color: "orange" },
  { label: "Yellow", color: "yellow" },
  { label: "Dark green", color: "DarkGreen" },
  { label: "Bright green", color: "#66FF00" },
  { label: "Light green", color: "#66FF99" },
  { label: "Blue", color: "blue" },
  { label: "Dark blue", color: "#00156D" },
  { label: "Bright blue", color: "#0096FF" },
  { label: "Light blue", color: "#ADD8E6" }
]
interiorColors: IColor[] = [
  { label: "Black", color: "black" },
  { label: "Grey", color: "grey" },
  { label: "White", color: "white" },
  { label: "Beige", color: "beige" },
  { label: "Charcoal Gray", color: "#747675" },
  { label: "Tan", color: "tan" },
  { label: "Brown", color: "brown" },
  { label: "Red", color: "red" },
]
}
