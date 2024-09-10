import { Routes } from '@angular/router';
import { MenuComponent } from './shared/components/menu/menu.component';
import { BasicsPageComponent } from './products/pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './products/pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './products/pages/uncommon-page/uncommon-page.component';
import { OrderComponent } from './products/pages/order/order.component';

export const routes: Routes = [
    {
        path: "",
        loadComponent: ()=> import( './products/pages/basics-page/basics-page.component' ).then( c => c.BasicsPageComponent )
    },
    {
        path:'numbers',
        loadComponent: ()=> import( './products/pages/numbers-page/numbers-page.component' ).then( c => c.NumbersPageComponent )
    },
    {
        path:'uncommon',
        loadComponent: ()=> import ('./products/pages/uncommon-page/uncommon-page.component').then( c => c.UncommonPageComponent)
    },


    {
        path:'custom',
        loadComponent:  ()=> import ('./products/pages/order/order.component').then( c => c.OrderComponent )
    },
    {
        path:'**',redirectTo:'',pathMatch:'full'
    }
];
