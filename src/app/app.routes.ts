import { Routes } from '@angular/router';
import { CatListComponent } from './Components/categories/list/list.component';
import { TrafListComponent } from './Components/trafics/list/list.component';
import { BuyersComponent } from './Components/buyers/buyers.component';
import { ProductsComponent } from './Components/products/products.component';

export const routes: Routes = [
  {
    path: 'categories',
    component: CatListComponent,
  },
  {
    path: 'trafics',
    component: TrafListComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'buyers',
    component: BuyersComponent,
  },
];
