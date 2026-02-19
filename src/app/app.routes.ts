import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';

export const routes: Routes = [

    {path:'',component:HomeComponent},
    {path:'navHome',component:HomeComponent},
    {path:'navOrder',component:OrderComponent}

];
