import { useEffect, useRef } from 'react'

/**
 * @param {React.RefObject<HTMLElement | null>} containerRef
 * @param {boolean} active
 * @param {() => void} [onEscape]
 */
export function useFocusTrap(containerRef, active, onEscape) {
  const onEscapeRef = useRef(onEscape)

  useEffect(() => {
    onEscapeRef.current = onEscape
  })

  useEffect(() => {
    if (!active) return
    const root = containerRef.current
    if (!root) return

    const focusable = root.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )
    const list = Array.from(focusable).filter(
      (el) => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true',
    )
    const first = list[0]
    const last = list[list.length - 1]
    const prevActive = document.activeElement

    first?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onEscapeRef.current?.()
        return
      }
      if (e.key !== 'Tab' || list.length === 0) return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else if (document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      if (prevActive instanceof HTMLElement && document.contains(prevActive)) {
        prevActive.focus()
      }
    }
  }, [active, containerRef])
}
