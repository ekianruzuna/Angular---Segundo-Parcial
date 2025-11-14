import { Component, inject, OnInit, signal } from '@angular/core';
import { Cliente } from '../cliente';
import { Rutina } from '../../../Modelos/rutina';
import { Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-lista',
  imports: [RouterLink],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista{

  private readonly cliente = inject(Cliente);
  protected readonly rutinas = toSignal(this.cliente.getRutinas());
  private readonly route = inject(Router)
  
  
  redireccionarDetalles(id: string | number){
    this.route.navigateByUrl("/app-detalles/" + id)
  }
  
}
