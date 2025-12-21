import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { StardustButton } from '@/components/ui/stardust-button'
import { CheckCircle2 } from 'lucide-react'

// WhatsApp SVG Icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export function Obrigado() {
  const location = useLocation()
  const [firstName, setFirstName] = useState('')

  useEffect(() => {
    if (location.state?.nome) {
      // Extract only the first name
      const fullName = location.state.nome as string
      const first = fullName.split(' ')[0]
      // Capitalize first letter
      setFirstName(first.charAt(0).toUpperCase() + first.slice(1).toLowerCase())
    }
    window.scrollTo(0, 0)
  }, [location])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Olá! Acabei de me cadastrar na IronZone${firstName ? ` (sou ${firstName})` : ''} e tenho algumas dúvidas.`
    )
    window.open(`https://wa.me/5521995807367?text=${message}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Shine Animation Styles */}
      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(-120%) translateY(120%) rotate(-45deg);
          }
          100% {
            transform: translateX(120%) translateY(-120%) rotate(-45deg);
          }
        }

        .shine-effect {
          position: relative;
          overflow: hidden;
          border-radius: 9999px;
        }

        .shine-effect::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -20%;
          width: 60%;
          height: 140%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.15) 50%,
            transparent 100%
          );
          filter: blur(8px);
          animation: shine 5s ease-in-out infinite;
          pointer-events: none;
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#A5825B]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#A5825B]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <div className="flex justify-center mb-10">
            <div className="shine-effect w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20 animate-in zoom-in duration-500">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
        </div>

        <div className="space-y-4 mb-10 animate-in slide-in-from-bottom-5 duration-700 delay-150">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            <span className="text-white">Parabéns{firstName ? `, ${firstName}` : ''}!</span>
            <br />
            <span className="text-gradient-gold">
              Seu acesso está garantido!
            </span>
          </h1>

          <p className="text-lg text-white/60 max-w-lg mx-auto leading-relaxed">
            Realizamos seu cadastro no sistema da academia. Aguardamos sua visita!
          </p>
        </div>

        <div className="animate-in slide-in-from-bottom-5 duration-700 delay-300">
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl backdrop-blur-sm p-6 md:p-8">
                <p className="text-base text-white/60 mb-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                    Ficou com alguma dúvida ou precisa de suporte imediato?
                </p>
                <StardustButton
                    onClick={handleWhatsAppClick}
                    className="w-full md:w-auto min-w-[300px] group leading-tight"
                >
                    <WhatsAppIcon className="w-[42px] h-[42px] md:w-6 md:h-6 mr-2 group-hover:scale-110 transition-transform" />
                    Falar com Consultor no WhatsApp
                </StardustButton>
            </div>
        </div>
      </div>
    </main>
  )
}
