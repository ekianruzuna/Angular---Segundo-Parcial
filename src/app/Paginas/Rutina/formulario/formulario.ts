import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, computed, effect, inject, input, OnInit, output, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Cliente } from '../cliente';
import { Rutina } from '../../../Modelos/rutina';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario{

  private cliente = inject(Cliente)


  protected readonly form = new FormBuilder().nonNullable.group({
    customer: ["", Validators.required],
    type: [""],
    duration: [0],
    skillLevel: [""],
    isGroupSession: [false],
    notes: [""]
  });

  protected readonly tipos = [
    "Principiante", "Intermedio", "Avanzado"
  ];



  //-----------------------Parte de editar--------------------------//
  readonly editando = input(false);     //es un decorador que funciona como signal que sirve para recibir datos de un contenedor 
                                        //padre, seria como decir que esta es una variable que puede llegar a recibir por parametro el componente, y nosotros hacemos algo si nos llega
                                        
  readonly rutina = input<Rutina>();    //en este caso recibimos si se quiere editar y recibimos la rutina que se quiere editar

  protected readonly rutinaSalida = output<Rutina>()  //un output es un decorador que funciona como una señal pero esta le pasa valores a el componente padre
                                                      //es decir que en este caso queremos que cuando se edite la rutina se emita este valor editado hacia el componente padre
                                                      //que en nuestro caso es el detalles, y cuando le llegue ese valor, modificar el html de forma dinamica

  //el effect es esta mirando los inputs (funcionan como signals) y se ejecuta cada vez que cambian los inputs,
  //el effect() hay que ponerlo dentro de un constructor() porque solo puedo estar dentro de un contexto de inyeccion
   constructor(){
     effect(() => {
       if(this.editando() && this.rutina()){
         this.form.patchValue(this.rutina()!)   //el patch value llena todos los valores del form que coincidan con los campos del objeto (en este caso la rutina)
       }
     })
   }
  



  handleSubmit(){
    if(this.editando()){
      
      if(confirm("Desea editar esta rutina?")){
        this.cliente.updateRutina(this.rutina()?.id!, this.form.getRawValue()).subscribe({
          next: (r) => {console.log("El objeto: " + this.rutina()?.customer + " el objeto actualizado: " + r.customer), this.rutinaSalida.emit(r)}, //aca estamos emitiendo el valor de salida del output
          error: (e) => console.log(e),                    
        })
      }

    }else{

      if(confirm("Desea agregar esta rutina?")){
        this.cliente.addRutina(this.form.getRawValue()).subscribe({
          next: () => {
            alert("Rutina agregada con exito")
            this.form.reset()
          }
        })
      }
    
    }
  }

  handleBorrar(){
    if(confirm("Desea borrar los datos?")){
      this.form.reset()
    }
  }

  get costumer(){
    return this.form.controls.customer
  }

  
}
