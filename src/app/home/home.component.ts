import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCartFlatbed } from '@fortawesome/free-solid-svg-icons';
import { ItemService } from '../item.service';
import { Item } from '../model.item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private itemService: ItemService, private router: Router){

  }
  items: Item[] = this.itemService.getItems()
  cartItems: Item[] = this.itemService.getCartItems()
  title = 'angular-shop';
  cartIcon = faCartFlatbed
  onCart(){
    this.router.navigateByUrl("/cart")
  }
  addToCart(item){
    this.itemService.addToCart(item)
  }
}
