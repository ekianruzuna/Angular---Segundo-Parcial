import { Component, inject, OnInit, signal } from '@angular/core';
import { Cliente } from '../cliente';
import { Rutina } from '../../../Modelos/rutina';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista',
  imports: [RouterLink],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista implements OnInit{

  private readonly cliente = inject(Cliente);
  protected readonly rutinas = signal<Rutina[]>([]);
  private readonly route = inject(Router)
  
    

  ngOnInit(){
    if(this.rutinas.length > 0){
      return this.rutinas
    }

    return this.cliente.getRutinas().subscribe({
      next: (r) => this.rutinas.set(r),
      error: (e) => alert(e)
    })
  }

  redireccionarDetalles(id: string | number){
    this.route.navigateByUrl("/app-detalles/" + id)
  }
  
}
