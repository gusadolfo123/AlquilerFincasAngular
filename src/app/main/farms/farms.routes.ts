import { Routes } from '@angular/router';
import { FarmsComponent } from './farms.component';
import { DetailComponent } from './detail/detail.component';

export const FarmsRoutes: Routes = [
  { path: '', component: FarmsComponent },
  { path: 'detail/:id', component: DetailComponent },
];
