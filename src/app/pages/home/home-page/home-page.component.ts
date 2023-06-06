import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembresiasComponent } from '../components/membresias/membresias.component';
import { ForosComponent } from '../components/foros/foros.component';
import { MiembrosActivosComponent } from '../components/miembros-activos/miembros-activos.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    MembresiasComponent,
    ForosComponent,
    MiembrosActivosComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {}
