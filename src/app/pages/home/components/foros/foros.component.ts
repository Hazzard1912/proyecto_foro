import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Foro } from 'src/app/interfaces/interfaces';
import { ForosService } from '../../services/foros.service';
import { formatDistanceToNow } from 'date-fns';
import { AvatarModule } from 'primeng/avatar';
import { Router } from '@angular/router';
import { ReplacePipe } from "../../../../pipes/replace.pipe";

@Component({
    selector: 'app-foros',
    standalone: true,
    templateUrl: './foros.component.html',
    styleUrls: ['./foros.component.css'],
    imports: [CommonModule, TableModule, AvatarModule, ReplacePipe]
})
export class ForosComponent implements OnInit {
  foros: Foro[] = [];
  tituloForo!: string;

  constructor(private forosService: ForosService, private router: Router) {}

  ngOnInit(): void {
    this.forosService.obtenerForos().subscribe((foros) => {
      foros.forEach((foro) => {
        foro.ultimaInteraccion = formatDistanceToNow(
          new Date(foro.ultimaInteraccion),
          { addSuffix: true }
        );
      });
      this.foros = foros;
    });
  }

  navegar(event: MouseEvent) {
    const titulo =
      (event.target as HTMLElement).getAttribute('data-titulo') || '';
    this.router.navigate(['forum',titulo]);
  }
}
