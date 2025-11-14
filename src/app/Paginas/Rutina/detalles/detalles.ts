import { Component, inject, linkedSignal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { map } from 'rxjs';
import { Cliente } from '../cliente';
import { toSignal } from '@angular/core/rxjs-interop';
import { Formulario } from "../formulario/formulario";
import { Rutina } from '../../../Modelos/rutina';

@Component({
  selector: 'app-detalles',
  imports: [ReactiveFormsModule, Formulario, RouterLinkActive],
  templateUrl: './detalles.html',
  styleUrl: './detalles.css',
})
export class Detalles {
  private readonly route = inject(ActivatedRoute)
  private readonly id = this.route.snapshot.paramMap.get("id");

  private readonly cliente = inject(Cliente);
  protected readonly rutina = toSignal(this.cliente.getRutinaById(this.id!));    //el toSignal maneja un observable como si fuera una señal, asignandole los valores en 
                                                                                //tiempo de renderizado ahorrando tener que hacer el suscribe manualmente del observable

  protected readonly rutinaActualizarDatos = linkedSignal(this.rutina);    //el linkedSignal es una señal que depende de otra, pero nos deja editarla, el computed por ejemplo no nos deja

  //este es el metodo que se ejecuta cuando nos llegua el output desde el formulario
  actualizarDatosRutina(r: Rutina){
     this.rutinaActualizarDatos.set(r);
  }
}
