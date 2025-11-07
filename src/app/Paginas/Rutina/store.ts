import { inject, Injectable, signal } from '@angular/core';
import { Cliente } from './cliente';
import { Rutina } from '../../Modelos/rutina';

@Injectable({
  providedIn: 'root',
})
export class Store {
  private readonly cliente = inject(Cliente)
  protected readonly rutinas = signal<Rutina[]>([])

  getRutinas (){
    if(this.rutinas.length > 0){
      return this.rutinas
    }

    return this.cliente.getRutinas().subscribe({
      next: (r) => this.rutinas.update(list => [...list, ...r])
    })
  }
}
