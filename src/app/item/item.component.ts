import { Component, EventEmitter, Output, Input } from '@angular/core';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { Item } from '../model.item';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  cart = faCartPlus
  quantity: number = 1
  @Output() add: EventEmitter<Item> = new EventEmitter()
  @Input() item: Item = {id:0, name:"", price:0, quantity:2}
  quantityUpdate(quantity: number){
    this.quantity = quantity
  }
  addToCart(){
    this.add.emit(this.item)
  }
}
