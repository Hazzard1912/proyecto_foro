import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Foro } from 'src/app/interfaces/interfaces';
import { ForosService } from '../../services/foros.service';
import { formatDistanceToNow } from 'date-fns';
import { AvatarModule } from "primeng/avatar";

@Component({
  selector: 'app-foros',
  standalone: true,
  imports: [CommonModule, TableModule, AvatarModule],
  templateUrl: './foros.component.html',
  styleUrls: ['./foros.component.css'],
})
export class ForosComponent implements OnInit {
  foros: Foro[] = [];

  constructor(private forosService: ForosService) {}

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
}
