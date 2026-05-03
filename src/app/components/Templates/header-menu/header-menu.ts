import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  imports: [CommonModule],
  templateUrl: './header-menu.html',
  styleUrl: './header-menu.scss',
})
export class HeaderMenu {
  items = [
    {
      label:"Buy",
      href:"buy"
    },
        {
      label:"Sell",
      href:"sell"
    },
        {
      label:"Research",
      href:"research"
    },
        {
      label:"Finance",
      href:"finance"
    }
  ]
}
