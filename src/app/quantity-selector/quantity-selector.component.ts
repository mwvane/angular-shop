import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css'],
})
export class QuantitySelectorComponent {
  @Output() update: EventEmitter<number> = new EventEmitter();
  quantity: number = 1;
  onMinus() {
    if (this.quantity > 1) {
      this.quantity--;
      this.update.emit(this.quantity)
    }
  }
  onPlus() {
    this.quantity++;
    this.update.emit(this.quantity)
  }
}
