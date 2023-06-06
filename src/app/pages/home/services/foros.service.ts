import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foro } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ForosService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  obtenerForos(): Observable<Foro[]> {
    const url = `${this.baseUrl}/foros/`;
    return this.http.get<Foro[]>(url);
  }
}
