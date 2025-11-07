import { Routes } from '@angular/router';
import { Lista } from './Paginas/Rutina/lista/lista';
import { Formulario } from './Paginas/Rutina/formulario/formulario';
import { Detalles } from './Paginas/Rutina/detalles/detalles';

export const routes: Routes = [
    {
        path: "",
        component: Lista
    },
    {
        path: "app-lista",
        title: "Lista Rutinas",
        component: Lista
    },
    {
        path: "app-formulario",
        title: "Formulario Rutinas",
        component: Formulario
    },
    {
        path: "app-detalles/:id",
        title: "Detalles",
        component: Detalles
    },
];
