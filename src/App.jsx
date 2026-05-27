import { useState } from 'react'
import { CATALOG } from './data/catalog.js'
import { BimodalFooter } from './components/BimodalFooter.jsx'
import { ProductGrid } from './components/ProductGrid.jsx'
import { SafeExitModal } from './components/SafeExitModal.jsx'

function App() {
  const [exitTarget, setExitTarget] = useState(null)

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:px-10 md:pt-28">
      <header className="mb-20 md:mb-28">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
          Calcalen
        </p>
        <h1 className="mt-6 max-w-xl text-3xl font-light tracking-tight text-neutral-900 md:text-4xl">
          Vitrina preparada para visitas, con presentación serena.
        </h1>
      </header>

      <ProductGrid
        products={CATALOG}
        onRequestVintedExit={(product) =>
          setExitTarget({ vintedUrl: product.vintedUrl, name: product.name })
        }
      />

      <BimodalFooter />

      <SafeExitModal
        open={exitTarget !== null}
        vintedUrl={exitTarget?.vintedUrl ?? ''}
        productName={exitTarget?.name ?? ''}
        onClose={() => setExitTarget(null)}
      />
    </div>
  )
}

export default App
