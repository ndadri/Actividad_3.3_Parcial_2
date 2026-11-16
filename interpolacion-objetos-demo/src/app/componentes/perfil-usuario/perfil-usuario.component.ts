// src/app/componentes/perfil-usuario/perfil-usuario.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule, JsonPipe, DatePipe, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { PerfilUsuario } from '../../models/perfil.model';

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [CommonModule, JsonPipe, DatePipe, CurrencyPipe, UpperCasePipe],
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent {

  // 1. Objeto Completo Estándar
  usuario: PerfilUsuario = {
    id: 101,
    nombreCompleto: 'Ana María Martínez',
    correo: 'ana.martinez@email.com',
    telefono: null, // Probar Nullish Coalescing (??)
    fechaRegistro: new Date(2024, 2, 15),
    salarioEstimado: 3500.50,
    activo: true,
    ubicacion: {
      ciudad: 'Madrid',
      pais: 'España',
      direccionAnidada: {
        calle: 'Avenida Gran Vía',
        numero: 120
      }
    },
    redesSociales: {
      github: 'github.com/anamartinez'
    }
  };

  // 2. Objeto Asíncrono / Inicialmente Nulo (Probar Safe Navigation ?.)
  usuarioAsincrono: PerfilUsuario | null = null;

  // 3. Objeto usando Signals (Angular Moderno)
  usuarioSignal = signal<PerfilUsuario>({
    id: 202,
    nombreCompleto: 'Carlos Eduardo Gómez',
    correo: 'carlos.gomez@email.com',
    telefono: '+34 600 123 456',
    fechaRegistro: new Date(2025, 0, 10),
    salarioEstimado: 4200.00,
    activo: true,
    ubicacion: {
      ciudad: 'Barcelona',
      pais: 'España'
    }
  });

  // Simulación de carga de datos HTTP asíncronos
  cargarDatosHTTP(): void {
    setTimeout(() => {
      this.usuarioAsincrono = {
        id: 303,
        nombreCompleto: 'Laura Restrepo',
        correo: 'laura.restrepo@email.com',
        telefono: '+57 311 987 6543',
        fechaRegistro: new Date(),
        salarioEstimado: 2800.00,
        activo: false,
        ubicacion: {
          ciudad: 'Bogotá',
          pais: 'Colombia'
        }
      };
    }, 2000);
  }
}
