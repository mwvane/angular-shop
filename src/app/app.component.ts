import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCartFlatbed} from '@fortawesome/free-solid-svg-icons';
import { ItemService } from './item.service';
import { Item } from './model.item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private itemService: ItemService, private router: Router){

  }
  items: Item[] = this.itemService.getItems()
  cartItems: Item[] = this.itemService.getCartItems()
  title = 'angular-shop';
  cartIcon = faCartFlatbed
  cartItemsCount = this.itemService.getCartItems()
  onCart(){
    this.router.navigateByUrl("/cart")
  }
}
