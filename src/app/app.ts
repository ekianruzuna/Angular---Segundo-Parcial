import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./Componentes/header/header";
import { Formulario } from "./Paginas/Rutina/formulario/formulario";
import { Footer } from "./Componentes/header/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Formulario, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Segundo-Parcial');
}
