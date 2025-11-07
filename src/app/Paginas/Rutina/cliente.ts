import { HttpClient, HttpHandler } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Rutina } from '../../Modelos/rutina';

@Injectable({
  providedIn: 'root',
})
export class Cliente {
  private readonly http = inject(HttpClient);
  private readonly urlBase = "http://localhost:3000/routines";


  getRutinas(){
    return this.http.get<Rutina[]>(this.urlBase)
  }

  getRutinaById(id: string | number){
    return this.http.get<Rutina>(this.urlBase + "/" + id)
  }

  addRutina(rutina: Rutina){
    return this.http.post<Rutina>(this.urlBase, rutina)
  }

  deleteRutina(id: string | number){
    return this.http.delete<void>(this.urlBase + "/" + id)
  }

  updateRutina(id: string | number, rutina: Rutina){
    return this.http.put<Rutina>(this.urlBase + "/" + id, rutina)
  }
}
