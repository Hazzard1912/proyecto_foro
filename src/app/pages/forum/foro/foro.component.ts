import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { ForoService } from '../foro.service';
import { ActivatedRoute } from '@angular/router';
import { formatDistanceToNow } from 'date-fns';
import { Publicacion } from 'src/app/interfaces/interfaces';
import { DividerModule } from 'primeng/divider';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { PublicacionComponent } from "../../posts/publicacion/publicacion.component";

@Component({
    selector: 'app-foro',
    standalone: true,
    templateUrl: './foro.component.html',
    styleUrls: ['./foro.component.css'],
    imports: [
        CommonModule,
        AvatarModule,
        TableModule,
        DividerModule,
        BreadcrumbModule,
        PublicacionComponent
    ]
})
export class ForoComponent implements OnInit {
  rutaActual!: string;
  tituloForo!: string;
  foro: Publicacion[] = [];

  items!: MenuItem[];
  home!: MenuItem;

  constructor(private foroService: ForoService, private ruta: ActivatedRoute) {}

  ngOnInit(): void {

    this.rutaActual = this.ruta.snapshot.routeConfig?.path || '';
    this.tituloForo = this.rutaActual.replace(/-/g, ' ');
    this.iniciarBreadcrumb();
    this.cargarPagina();
  }

  cargarPagina(): void {
    this.foroService
      .obtenerDetallesForo(this.rutaActual)
      .subscribe((publicaciones) => {
        console.log(publicaciones);
        publicaciones.forEach((publicacion) => {
          publicacion.fechaUltimoComentario = formatDistanceToNow(
            new Date(publicacion.fechaUltimoComentario),
            { addSuffix: true }
          );
        });
        this.foro = publicaciones;
      });
  }

  iniciarBreadcrumb(): void {
    this.items = [{ label: 'Foros' }, { label: this.tituloForo }];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
