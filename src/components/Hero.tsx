import { LeadForm } from '@/components/LeadForm'
import logo from '@/assets/logo-iron-zone.svg'
import heroBg from '@/assets/hero-bg.jpg'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background Image with Grayscale + Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="IronZone Academia"
          className="w-full h-full object-cover grayscale"
          style={{ objectPosition: 'center 60%' }}
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">
        {/* Logo */}
        <img
          src={logo}
          alt="IronZone Logo"
          className="w-[76px] mb-8"
        />

        {/* Headline - FREE PASS */}
        {/* Headline - FREE PASS */}
        <h1
          className="text-gradient-gold font-bold mb-4 leading-none text-[18vw] md:text-[90px]"
          style={{
            fontFamily: "'Libre Caslon Display', serif",
          }}
        >
          FREE PASS
        </h1>

        {/* Subtitle */}
        {/* Subtitle */}
        <p className="text-[#D9D9D9] uppercase text-[4vw] md:text-lg tracking-wide mb-8 leading-snug" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
          APÓS PREENCHER O FORMULÁRIO ABAIXO, É SÓ VIR TREINAR!
        </p>

        {/* Lead Form */}
        <LeadForm />

        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="w-[30px] h-[54px] border-2 border-white/30 rounded-full flex flex-col items-center justify-center gap-0 overflow-hidden">
            <ChevronDown size={24} className="text-white/60 animate-scrolldown -mb-2.5" />
            <ChevronDown size={24} className="text-white/60 animate-scrolldown" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
