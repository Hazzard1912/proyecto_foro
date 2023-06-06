export interface Foro {
  titulo: string;
  publicaciones: number;
  comentarios: number;
  ultimaInteraccion: any;
  ultimoUsuario: string;
}

export interface Publicacion {
  titulo: string;
  contenido: string;
  autor: string;
  respuestas: number;
  vistas: number;
  ultimoUsuario: string;
  fechaUltimoComentario: any;
  fechaCreacion: any;
}
