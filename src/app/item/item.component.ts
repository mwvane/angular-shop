import { Component, EventEmitter, Output, Input } from '@angular/core';
import {
  faCartPlus,
  faTrash,
  faDollar,
} from '@fortawesome/free-solid-svg-icons';
import { Item } from '../model.item';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  cart = faCartPlus;
  trashIcon = faTrash;
  dollar = faDollar;
  @Input() cardType: string = 'item';
  @Output() add: EventEmitter<Item> = new EventEmitter();
  @Output() delete: EventEmitter<number> = new EventEmitter();
  @Output() updateQuantity: EventEmitter<number> = new EventEmitter()
  @Input() item: Item = { id: 0, name: '', price: 0, quantity: 2 };
  quantityUpdate(quantity: number) {
    this.item.quantity = quantity;
    this.updateQuantity.emit(quantity)
  }

  addToCart() {
    this.add.emit(this.item);
  }
  onDelete() {
    if (this.item.id) {
      this.delete.emit(this.item.id);
    }
  }
}
