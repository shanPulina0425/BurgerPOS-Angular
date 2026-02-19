import { Injectable } from '@angular/core';

export interface Burger {
  id: number;
  name: string;
  price: number;
  image: string;
  

}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  
   menuList: Burger[] = [
    
  {
    id: 1,
    name: "Classic Cheeseburger",
    price: 5.99,
    image: "/images/classic-cheese.jpg",
  },
  {
    id: 2,
    name: "Double Beef Burger",
    price: 7.99,
    image: "/images/double-beef.jpg",
  },
  {
    id: 3,
    name: "Chicken Crispy Burger",
    price: 6.49,
    image: "/images/chicken-crispy.jpg",
  },
  

   ];

  getMenuList(): Burger[] 
  {
    return this.menuList;
  }

}
