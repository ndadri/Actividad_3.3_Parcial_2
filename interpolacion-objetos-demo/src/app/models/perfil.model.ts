// src/app/models/perfil.model.ts
export interface Ubicacion {
  ciudad: string;
  pais: string;
  direccionAnidada?: {
    calle: string;
    numero: number;
  };
}

export interface PerfilUsuario {
  id: number;
  nombreCompleto: string;
  correo: string;
  telefono: string | null;
  fechaRegistro: Date;
  salarioEstimado: number;
  activo: boolean;
  ubicacion: Ubicacion;
  redesSociales?: {
    twitter?: string;
    github?: string;
  };
}
