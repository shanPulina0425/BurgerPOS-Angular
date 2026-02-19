import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { MenuComponent } from './components/menu/menu.component';

export const routes: Routes = [

    {path:'',component:HomeComponent},
    {path:'navHome',component:HomeComponent},
    {path:'navOrder',component:OrderComponent},
    {path:'navMenu',component:MenuComponent}
    
    

];
