import { Routes } from '@angular/router';
import { CatListComponent } from './Components/categories/list/list.component';
import { TrafListComponent } from './Components/trafics/list/list.component';

export const routes: Routes = [
  {
    path: 'categories',
    component: CatListComponent,
  },
  {
    path: 'trafics',
    component: TrafListComponent,
  },
];
