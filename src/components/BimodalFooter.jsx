import { CONTACT } from '../config/contact.js'

function waMeHref(e164) {
  const digits = e164.replace(/\D/g, '')
  return `https://wa.me/${digits}`
}

export function BimodalFooter() {
  return (
    <footer className="mt-32 border-t border-neutral-200 pt-16 pb-20 text-sm text-neutral-600">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        {CONTACT.channels.map((ch) => (
          <div key={ch.e164}>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              WhatsApp — mensajes únicamente
            </p>
            <p className="mt-3 text-xs text-neutral-500">{ch.subtitle}</p>
            <a
              href={waMeHref(ch.e164)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-lg text-neutral-900 underline-offset-4 transition hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
            >
              WhatsApp ({ch.e164})
            </a>
            <p className="mt-2 text-neutral-500">
              Este enlace abre el chat de WhatsApp; no se ofrece llamada de voz en estos números.
            </p>
          </div>
        ))}
      </div>
      <p className="mt-14 max-w-2xl text-sm leading-relaxed text-neutral-500">
        Compromiso local-first: esta vitrina prioriza activos servidos desde su propio origen y evita rastreadores
        o analítica de terceros. El contacto es solo por mensajes de WhatsApp; no usar para llamadas de voz.
      </p>
    </footer>
  )
}
