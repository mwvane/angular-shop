import { Component } from '@angular/core';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  cart = faCartPlus
  quantity: number = 1
  quantityUpdate(quantity: number){
    this.quantity = quantity
  }
}
