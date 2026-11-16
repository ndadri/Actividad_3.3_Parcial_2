// src/app/app.component.ts
import { Component } from '@angular/core';
import { PerfilUsuarioComponent } from './componentes/perfil-usuario/perfil-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PerfilUsuarioComponent],
  template: `<app-perfil-usuario></app-perfil-usuario>`
})
export class AppComponent {}
