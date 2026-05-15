import { useState } from 'react'

/** @typedef {{ id: number, name: string, size: string, description: string, vintedUrl: string, imageUrl: string }} CatalogItem */

/**
 * @param {{ product: CatalogItem }} props
 */
function ProductImage({ product }) {
  const [failed, setFailed] = useState(false)

  const alt = `${product.name}. ${product.description}`

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex h-full w-full items-center justify-center border border-neutral-900/10 bg-neutral-50 px-6"
      >
        <p className="max-w-[14rem] text-center text-xs font-medium tracking-wide text-neutral-500">
          Imagen en proceso de carga
        </p>
      </div>
    )
  }

  const srcSet = `${product.imageUrl} 1x, ${product.imageUrl} 2x`

  return (
    <img
      src={product.imageUrl}
      srcSet={srcSet}
      sizes="(max-width: 768px) 100vw, 50vw"
      alt={alt}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
      decoding="async"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

/**
 * @param {{ products: CatalogItem[], onRequestVintedExit: (product: CatalogItem) => void }} props
 */
export function ProductGrid({ products, onRequestVintedExit }) {
  return (
    <section
      aria-label="Galería de productos"
      className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20 lg:gap-24"
    >
      {products.map((product) => (
        <article
          key={product.id}
          className="group relative overflow-hidden bg-neutral-100"
        >
          <div className="relative aspect-[2/3] w-full">
            <ProductImage product={product} />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-5 p-8 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="text-white">
                <p className="text-lg font-medium tracking-tight">{product.name}</p>
                <p className="mt-1 text-sm text-white/85">{product.size}</p>
              </div>
              <button
                type="button"
                className="pointer-events-auto w-max rounded border border-white/40 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={() => onRequestVintedExit(product)}
              >
                Ver en Vinted
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
