import { Injectable } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Item } from './model.item';

@Injectable({ providedIn: 'root' })
export class ItemService {
  private items: Item[] = [
    { id: 1, name: 'sport Jacket', price: 100, quantity: 12 },
    { id: 2, name: 'sport Jacket', price: 100, quantity: 12 },
    { id: 3, name: 'sport Jacket', price: 100, quantity: 12 },
    { id: 4, name: 'sport Jacket', price: 100, quantity: 12 },
    { id: 5, name: 'sport Jacket', price: 100, quantity: 12 },
    { id: 6, name: 'sport Jacket', price: 100, quantity: 12 },
    { id: 7, name: 'sport Jacket', price: 100, quantity: 12 },
  ];
  private cart: Item[] = [];
  addToCart(id: number) {
    const item = this.items.find((item) => item.id == id);
    if (item) {
      this.cart.unshift(item);
      return true;
    }
    return false;
  }
  deleteItem(id: number) {
    const index = this.cart.findIndex((item) => item.id == id);
    if (index != undefined) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }
  updateQuantity(id: number, quantity: number) {
    const item = this.cart.find((item) => item.id == id);
    if (item) {
      item.quantity = quantity;
    }
  }
}
