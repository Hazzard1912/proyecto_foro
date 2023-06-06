import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicacion } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ForoService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  obtenerDetallesForo(ruta: string): Observable<Publicacion[]> {
    const endpoint = `${this.baseUrl}/foros/${ruta}`;
    return this.http.get<Publicacion[]>(endpoint);
  }
}
