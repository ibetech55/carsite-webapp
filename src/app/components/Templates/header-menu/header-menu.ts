import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  imports: [CommonModule],
  templateUrl: './header-menu.html',
  styleUrl: './header-menu.scss',
})
export class HeaderMenu {
  /**
   *
   */
  constructor(private readonly _Router: Router) {

  }
  items = [
    {
      label: "Buy",
      href: "buy"
    },
    {
      label: "Sell",
      href: "sell"
    },
    {
      label: "Research",
      href: "research"
    },
    {
      label: "Finance",
      href: "finance"
    },
    {
      label: "My Garage",
      href: "my-garage"
    },
  ];

  handleRoute(route: string) {
    this._Router.navigate([route])
  }
}
