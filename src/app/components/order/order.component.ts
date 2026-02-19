import { Component, Inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-order',
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})

export class OrderComponent {

  menuService = Inject(MenuService);

  menuItems =this.menuService.getMenuList();



}
