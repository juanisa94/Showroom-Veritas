# ADR 001: Arquitectura Base de Showroom Veritas

## Estado

Aceptado.

## Contexto

Showroom Veritas es una vitrina web para presentar un catalogo real de prendas y dirigir la compra hacia Vinted con una experiencia clara, ligera y segura. El proyecto prioriza:

- Transparencia radical antes de abandonar el sitio.
- Privacidad Local-First, sin rastreadores ni analitica externa.
- Rendimiento alto en navegadores modernos y dispositivos moviles.
- Persistencia del catalogo y de las decisiones tecnicas mediante Git.
- Despliegue estatico en plataformas como Netlify, Vercel o GitHub Pages.

## Decision

Se adopta un **Monolito Modular** como arquitectura base.

La aplicacion se implementa como una SPA estatica con **React**, **Vite** y **Tailwind CSS**, organizada por responsabilidades dentro de `src/`:

- `components/`: componentes de interfaz reutilizables, como `ProductGrid`, `SafeExitModal` y `BimodalFooter`.
- `config/`: datos maestros versionados, como `catalog.js` y `contact.js`.
- `hooks/`: comportamiento transversal encapsulado, como la trampa de foco del modal.
- `assets/`: imagenes locales del catalogo, importadas de forma estatica para que Vite genere rutas con hash en produccion.

El catalogo se mantiene en `src/config/catalog.js` como fuente unica de verdad para las prendas del Lote 1. Las imagenes se importan con ES Modules desde `src/assets/`, permitiendo que Vite procese los JPEG y emita nombres con hash en `dist/assets/`.

La salida hacia Vinted se controla mediante `SafeExitModal`, que informa al usuario antes de abrir el enlace externo. Los enlaces se abren en una nueva pestaña usando medidas de seguridad de navegador (`noopener` y `noreferrer`).

La politica de contacto queda unificada a **mensajes unicamente**. Los terminales definidos en `src/config/contact.js` se modelan como datos congelados con `Object.freeze` y se consumen desde el pie de pagina para abrir chats de WhatsApp (`wa.me`), evitando llamadas de voz.

Para despliegue SPA en Netlify se incluye `public/_redirects` con:

```text
/* /index.html 200
```

Esto delega las rutas al cliente y evita errores 404 al refrescar rutas internas.

## Consecuencias

### Positivas

- El sistema se mantiene simple, auditable y facil de desplegar como sitio estatico.
- No se introduce backend ni dependencias pesadas para el catalogo actual.
- Los activos locales se empaquetan con hashes, reduciendo problemas de cache en produccion.
- La privacidad Local-First queda preservada al no depender de analiticas, CDNs de fuentes o scripts de terceros.
- La estructura modular permite evolucionar el catalogo, los componentes y la configuracion sin romper limites internos.

### Riesgos y mitigaciones

- Si el catalogo crece mucho, `catalog.js` podria volverse dificil de mantener. Mitigacion: migrar a una fuente de datos generada o CMS estatico sin cambiar la interfaz de consumo.
- Si una imagen falta o se corrompe, el build puede fallar cuando el import estatico no resuelve. Mitigacion: mantener revision previa de assets y conservar el fallback visual de `ProductGrid` para errores de carga en runtime.
- Si se anaden rutas reales con React Router, deben mantenerse las reglas de fallback SPA para Netlify y el equivalente para la plataforma de despliegue elegida.

## Decisiones Rechazadas

- **Backend propio para catalogo**: rechazado por complejidad innecesaria para el alcance actual.
- **Analiticas externas**: rechazadas por la politica Local-First y la prioridad RGPD.
- **Carga remota de imagenes o fuentes**: rechazada para conservar control de activos, rendimiento y privacidad.
- **Microfrontends o separacion en paquetes**: rechazada por sobreingenieria para un escaparate pequeno y estatico.

## Criterios de Validacion

- `npm run build` genera `dist/` correctamente.
- Las imagenes del catalogo aparecen en `dist/assets/` con nombres hasheados.
- `public/_redirects` se copia a `dist/_redirects` durante el build.
- No existen scripts de analitica externa en la plantilla HTML.
- El repositorio remoto `origin` apunta a `https://github.com/juanisa94/Showroom-Veritas.git`.

