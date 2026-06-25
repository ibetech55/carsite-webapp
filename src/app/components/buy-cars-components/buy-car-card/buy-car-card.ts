import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buy-car-card',
  imports: [],
  templateUrl: './buy-car-card.html',
  styleUrl: './buy-car-card.scss',
})
export class BuyCarCard {
  @Input() makeName!: string;
  @Input() modelName!: string;
  @Input() imageUrl!: string;
  @Input() price!: string;
  @Input() location!: string;
  @Input() mileage!: string;
  @Input() year!: string | number;
  @Input() userType!: string;
  @Input() dealershipName!: string;

  handleSeller() {
    return this.userType.toLowerCase() === 'dealership' ? this.dealershipName : 'Private Seller'
  }
}
