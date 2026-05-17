import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useFocusTrap } from '../hooks/useFocusTrap.js'

/** @param {string} productName */
function exitCopy(productName) {
  const productHint = productName ? ` de ${productName}` : ''
  return `¡Hola! Estás a punto de salir a nuestro rincón en Vinted para ver los detalles finales${productHint}`
}

/** @typedef {{ open: boolean, vintedUrl: string, productName: string, onClose: () => void }} SafeExitModalProps */

/**
 * @param {SafeExitModalProps & { labels?: Partial<{ title: string, cancel: string, confirm: string }> }} props
 */
export function SafeExitModal({ open, vintedUrl, productName, onClose, labels = {} }) {
  const dialogRef = useRef(null)
  const titleId = useId()
  const descId = useId()

  const copy = {
    title: labels.title ?? 'Salida segura a Vinted',
    cancel: labels.cancel ?? 'Cancelar',
    confirm: labels.confirm ?? 'Continuar a Vinted',
  }

  useFocusTrap(dialogRef, open, onClose)

  useEffect(() => {
    if (!open) return
    document.body.dataset.scrollLock = '1'
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      delete document.body.dataset.scrollLock
      document.body.style.overflow = prev
    }
  }, [open])

  if (!open) return null

  const handleConfirm = () => {
    window.open(vintedUrl, '_blank', 'noopener,noreferrer')
    onClose()
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-6"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="w-full max-w-md rounded-md border border-neutral-200 bg-white p-10 shadow-sm"
      >
        <h2 id={titleId} className="text-sm font-medium tracking-wide text-neutral-900">
          {copy.title}
        </h2>
        <p id={descId} className="mt-6 text-sm leading-relaxed text-neutral-600">
          {exitCopy(productName)}
        </p>
        <div className="mt-12 flex justify-end gap-4">
          <button
            type="button"
            className="rounded px-5 py-2 text-sm text-neutral-600 transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
            onClick={onClose}
          >
            {copy.cancel}
          </button>
          <button
            type="button"
            className="rounded bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2"
            onClick={handleConfirm}
          >
            {copy.confirm}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
