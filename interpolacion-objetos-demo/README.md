# interpolacion-objetos-demo

## Descripción

Proyecto Angular para la **Actividad 3.3 - Parcial 2** del curso de Lenguajes de Programación.

Demuestra el uso completo de **Interpolación de Objetos en Angular** incluyendo:

1. **Notación por Punto** — Acceso a propiedades simples y anidadas (`{{ objeto.propiedad }}`)
2. **Safe Navigation Operator (`?.`)** — Prevención de errores con objetos nulos
3. **Nullish Coalescing (`??`)** — Valores de respaldo para campos nulos/indefinidos
4. **JsonPipe** — Depuración de objetos completos en plantilla
5. **Pipes de Formato** — `DatePipe`, `CurrencyPipe`, `UpperCasePipe`
6. **Angular Signals** — Reactividad moderna con objetos en plantillas

## Estructura del Proyecto

```
src/
├── app/
│   ├── componentes/
│   │   └── perfil-usuario/
│   │       ├── perfil-usuario.component.ts   ← Lógica TypeScript
│   │       ├── perfil-usuario.component.html ← Plantilla con interpolaciones
│   │       └── perfil-usuario.component.css  ← Estilos visuales
│   ├── models/
│   │   └── perfil.model.ts                   ← Interfaces PerfilUsuario y Ubicacion
│   ├── app.component.ts                      ← Componente raíz
│   └── app.config.ts                         ← Configuración de la app
├── index.html
├── main.ts
└── styles.css
```

## Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
ng serve --open
```

La app estará disponible en `http://localhost:4200`

## Funcionalidades Demostradas

| Sección | Técnica | Ejemplo |
|---------|---------|---------|
| 1 | Notación por punto | `{{ usuario.nombreCompleto \| uppercase }}` |
| 2 | Nullish Coalescing | `{{ usuario.telefono ?? 'Sin número' }}` |
| 3 | Safe Navigation | `{{ usuarioAsincrono?.ubicacion?.pais }}` |
| 4 | Angular Signals | `{{ usuarioSignal().nombreCompleto }}` |
| 5 | JsonPipe | `{{ usuario \| json }}` |
