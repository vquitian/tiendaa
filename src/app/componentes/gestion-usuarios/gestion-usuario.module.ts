// src/app/gestion-usuarios/gestion-usuarios.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionUsuariosComponent } from './gestion-usuarios.component';

@NgModule({
  declarations: [GestionUsuariosComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class GestionUsuariosModule { }
