import { MapPin, ExternalLink, Navigation } from 'lucide-react'

const MapEmbed = ({ className }: { className?: string }) => (
  <div className={`w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl ${className}`}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.8!2d-43.4!3d-22.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzAwLjAiUyA0M8KwMjQnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
      width="100%"
      height="100%"
      style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(85%)' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Localização IronZone"
    />
  </div>
)

export function Location() {
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Estr.+Cel.+Pedro+Corrêa,+261+-+Barra+Olímpica'
  const wazeUrl = 'https://waze.com/ul?q=Estr.+Cel.+Pedro+Corrêa,+261+-+Barra+Olímpica'

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A]">
      {/* Container max-w-[1140px] */}
      <div className="max-w-[1140px] mx-auto">

        {/* Two-Column Grid: Text Left, Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-start">

          {/* Left Column: Text Content */}
          <div>

            {/* Tag "LOCALIZAÇÃO" - Gold with letter-spacing */}
            <div className="flex items-center gap-2 mb-6 text-[#A5825B]">
              <MapPin className="w-4 h-4" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase">
                Localização
              </span>
            </div>

            {/* Title - Keep original style */}
            <h2
              className="text-gradient-gold text-[14vw] md:text-5xl font-bold mb-4 uppercase leading-none"
              style={{ fontFamily: "'Libre Caslon Display', serif" }}
            >
              VENHA NOS CONHECER
            </h2>

            {/* Welcoming Paragraph - Simple and complementary */}
            <p className="text-[#D9D9D9] text-lg mb-10 leading-relaxed max-w-md">
              Nosso espaço é para quem busca resultado <br /> de verdade. Apareça para uma visita.
            </p>

            {/* MOBILE MAP: Visible only on mobile (< lg breakpoints) */}
            <MapEmbed className="lg:hidden h-[350px] mb-10" />

            {/* Address Block with Vertical Line */}
            <div className="flex items-start gap-4 mb-10">
              {/* Vertical Line */}
              <div className="w-px h-14 bg-[#A5825B]/60 mt-1" />

              {/* Address Content */}
              <div>
                <span className="block text-xs font-medium tracking-[0.15em] uppercase mb-2 text-white/50">
                  Endereço
                </span>
                <div className="flex items-start gap-2">
                  <p className="text-[#D9D9D9] text-base leading-relaxed">
                    Estr. Cel. Pedro Corrêa, 261<br />
                    Barra Olímpica, Rio de Janeiro - RJ
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Google Maps Button - Primary (Solid) */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 bg-[#A5825B] hover:bg-[#B8956A] text-[#0A0A0A]"
              >
                <ExternalLink className="w-4 h-4" />
                Abrir no Google Maps
              </a>

              {/* Waze Button - Secondary (Outline) */}
              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 border border-[#A5825B]/50 hover:border-[#A5825B] text-[#A5825B] hover:text-[#F3DBB7]"
              >
                <Navigation className="w-4 h-4" />
                Abrir no Waze
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: DESKTOP MAP (Visible only on lg+ breakpoints) */}
          <div>
             <MapEmbed className="hidden lg:block h-[500px]" />
          </div>

        </div>
      </div>
    </section>
  )
}
