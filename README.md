# Calcalen

Vitrina estática ligera para visitas (**React** + **Vite** + **Tailwind**) con salida pedagógica a **Vinted**, contacto **bimodal** y enfoque **local-first**.

## Manifiesto de Confianza Veritas

1. **Transparencia** — La comunicación ante la compra fuera de este sitio se explica sin prisa: antes de abrir el escaparate oficial en Vinted aparece un aviso en tono profesor, para que cada visitante entienda el motivo del salto.

2. **Seguridad de la navegación** — Los enlaces a Vinted se abren en una pestaña nueva con `noopener` y `noreferrer`, reduciendo riesgos de explotación de `window.opener`.

3. **Regla de contacto bimodal [ARC324]** — El número `+34695056887` se usa **exclusivamente** para **voz** (`tel:`). El número `+34624266445` se usa **exclusivamente** para **WhatsApp** (`wa.me`, sin caracteres extra en la ruta). No se permutan ni se reutilizan indistintamente.

4. **Procesamiento local-first** — La aplicación está pensada para servir sus activos desde el mismo origen en producción y **sin rastreadores ni analítica de terceros** en esta base. Tipografía **del sistema**, sin cargas desde CDNs externos en la plantilla HTML.

Cuando llegue `catalog.js`, sustituya el arreglo de demostración en `App.jsx` por sus datos reales manteniendo el mismo molde (`id`, `name`, `sizeLabel`, `images`, `vintedUrl`).

## Arquitectura breve

- **SPA con React**: una sola página, contenido modular bajo `src/`.
- **Carpetas**: `components/` (UI), `config/` (`contact.js` con `Object.freeze` para valores inmutables de contacto), `hooks/` (p. ej. trampa de foco accesible), `assets/` (imágenes locales de demostración).
- **Build**: **Vite** empaqueta y optimiza; **Tailwind v4** (plugin `@tailwindcss/vite`) gestiona los estilos utilitarios con sensación rápida y mucho espacio en blanco (línea “Seiko”).

## Desarrollo

```bash
npm install
npm run dev
```

```bash
npm run build   # compilación para producción
npm run lint
```

## Estado del catálogo

Hoy los productos son **placeholders locales** (`src/assets/product-*.svg`). Sustitúyalos por su catálogo (y rutas/imágenes responsive) cuando esté disponible.
