import { Mail, Phone, Instagram } from 'lucide-react'
import logo from '@/assets/logo-iron-zone.svg'

export function Footer() {
  return (
    <footer className="py-8 px-4 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="IronZone Logo"
          className="w-24 mb-6 opacity-80"
        />

        {/* Social Icons */}
        <div className="flex gap-6 mb-6">
          <a
            href="mailto:contato@ironzone.com.br"
            className="text-[#D9D9D9] hover:text-[#A5825B] transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/5521995807367"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D9D9D9] hover:text-[#A5825B] transition-colors"
            aria-label="WhatsApp"
          >
            <Phone className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/ironzone"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D9D9D9] hover:text-[#A5825B] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-6" />

        {/* Copyright */}
        <p className="text-[#D9D9D9]/60 text-sm">
          Todos os direitos reservados © IronZone
        </p>
      </div>
    </footer>
  )
}
