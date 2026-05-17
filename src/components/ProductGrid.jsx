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
          className="group bg-stone-50"
        >
          <button
            type="button"
            className="relative block aspect-[2/3] w-full overflow-hidden bg-neutral-100 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50"
            aria-label={`Ver detalles seguros de ${product.name} en Vinted`}
            onClick={() => onRequestVintedExit(product)}
          >
            <ProductImage product={product} />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
          </button>
          <div className="flex flex-col gap-4 bg-stone-50 pt-5">
            <div>
              <h2 className="text-base font-medium tracking-tight text-neutral-950">
                {product.name}
              </h2>
              <p className="mt-1 text-sm text-neutral-500">{product.size}</p>
            </div>
            <p className="max-h-32 overflow-y-auto scroll-smooth pr-1 text-sm leading-6 text-neutral-600">
              {product.description}
            </p>
            <button
              type="button"
              className="min-h-11 w-full rounded border border-neutral-900 px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-950 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 active:bg-neutral-800 md:w-max"
              onClick={() => onRequestVintedExit(product)}
            >
              Ver en Vinted
            </button>
          </div>
        </article>
      ))}
    </section>
  )
}
