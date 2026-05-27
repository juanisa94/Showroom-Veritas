# Manual de Operaciones para Crecimiento de Lotes

## Objetivo

Este manual explica como incorporar un nuevo lote de prendas a Showroom Veritas manteniendo la calidad visual, la privacidad Local-First y la seguridad operativa del escaparate.

La idea es sencilla: cada lote nuevo debe entrar con imagenes limpias, datos verificados, enlaces correctos y una publicacion reproducible desde Git.

## Preparacion de Activos

1. Reune las fotografias finales del lote en formato **JPEG**.
2. Renombra cada archivo con una convencion estable y predecible:

```text
prenda_6.jpg
prenda_7.jpg
prenda_8.jpg
```

3. Coloca las imagenes en `src/assets/`.
4. Evita duplicados con extensiones mixtas. Para cada prenda debe existir una sola version final: `.jpg`.
5. Optimiza las imagenes antes de copiarlas al proyecto:
   - Usa orientacion vertical cuando sea posible.
   - Mantén buena nitidez sin archivos innecesariamente pesados.
   - Elimina metadatos sensibles si la herramienta de edicion lo permite.
6. No renombres manualmente los archivos generados en `dist/`. Vite se encarga de crear hashes unicos durante `npm run build`, por ejemplo:

```text
dist/assets/prenda_6-AbC123.jpg
```

Estos hashes son importantes porque evitan que el navegador del cliente conserve versiones antiguas en cache.

## Actualizacion del Catalogo

La fuente actual del catalogo esta en `src/config/catalog.js`. Si en una iteracion futura se migra a `src/data/catalog.js` con TypeScript, conserva la misma forma de datos para no romper `ProductGrid`.

Cada nueva prenda debe respetar esta estructura:

```javascript
{
  id: 6,
  name: "Nombre verificado de la prenda",
  size: "Talla verificada o Ver en Vinted",
  description: "Descripcion pedagogica verificada, clara y sin inventar datos.",
  imageUrl: prenda6,
  vintedUrl: "https://www.vinted.es/items/..."
}
```

Antes de añadir el objeto, importa la imagen al inicio del archivo:

```javascript
import prenda6 from '../assets/prenda_6.jpg';
```

Reglas de integridad:

- No inventes descripciones, marcas, tallas ni estados.
- No incluyas precios en el catalogo ni en la interfaz.
- Mantén `id` unico y estable.
- Mantén `imageUrl` apuntando al import estatico correspondiente.
- Mantén `vintedUrl` con el enlace real del articulo.
- Si se migra a TypeScript, define un tipo `CatalogItem` y valida que todos los objetos incluyan `id`, `name`, `size`, `description`, `imageUrl` y `vintedUrl`.

## Protocolo de Verificacion

Antes de ejecutar `git push`, revisa esta lista con calma:

- Todas las imagenes nuevas existen en `src/assets/` y usan extension `.jpg`.
- `npm run build` termina sin errores.
- `dist/assets/` contiene las imagenes con nombres hasheados.
- Cada enlace de Vinted abre el articulo correcto.
- El modal de salida muestra el nombre de la prenda y mantiene el tono protector.
- La cuadricula mantiene la estetica Seiko: espacio en blanco, sobriedad, imagen grande y sin ruido visual.
- En hover se muestra solo el nombre y la talla, sin precio.
- El fallback `Imagen en proceso de carga` sigue funcionando si una imagen falla en runtime.
- No se han añadido scripts de analitica, trackers, fuentes remotas ni dependencias pesadas.
- La politica de contacto sigue siendo mensajes unicamente mediante WhatsApp.
- `public/_redirects` conserva la regla de Netlify:

```text
/* /index.html 200
```

Comandos recomendados:

```bash
npm run build
git status
git diff --stat
```

Si todo esta correcto:

```bash
git add .
git commit -m "feat: integrar Lote 2 del catalogo"
git push
```

## Despliegue Automatico

Netlify esta conectado a la rama `master`. Cuando detecta un nuevo commit en esa rama, ejecuta el build y actualiza la web publicada automaticamente.

Procedimiento esperado:

1. Guardar los cambios localmente.
2. Ejecutar `npm run build`.
3. Crear un commit claro y pequeno.
4. Hacer `git push` a `origin/master`.
5. Esperar a que Netlify complete el despliegue.
6. Revisar la URL publica y comprobar que el lote nuevo aparece correctamente.

Si Netlify falla, no improvises cambios grandes. Lee primero el error del build, corrige la causa minima y vuelve a publicar con un nuevo commit.

