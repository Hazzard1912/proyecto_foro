import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { LoginComponent } from './shared/components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];
