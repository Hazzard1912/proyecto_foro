import { Route } from '@angular/router';
import { ForoComponent } from './foro/foro.component';

export default [
  {
    path: '',
    children: [
      {
        path: 'general',
        component: ForoComponent,
      },
      {
        path: 'presentate',
        component: ForoComponent,
      },
      {
        path: 'preguntas-y-respuestas',
        component: ForoComponent,
      },
      {
        path: '**',
        redirectTo: 'general',
      },
    ],
  },
] as Route[];
