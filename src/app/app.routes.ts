import { Routes } from '@angular/router';
import { Home} from './home/home';
import {AddNew} from './add-new/add-new'

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home Page',
  },
  {
    path: 'new-edit',
    component: AddNew,
    title: 'New Product Page',
  },
];

