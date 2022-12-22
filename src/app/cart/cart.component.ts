import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../model.item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private itemService: ItemService){

  }
  cartItems: Item[] = this.itemService.getCartItems()
  onDelete(id: number){
    this.itemService.deleteItem(id)
  }
  onQuantityUpdate(item: Item) {
    this.itemService.updateQuantity(item.id, item.quantity)
  }
}
