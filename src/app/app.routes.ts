import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'forum',
    loadChildren: () => import('../app/pages/forum/forum.routes'),
  },
];
