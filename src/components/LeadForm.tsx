import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { StardustButton } from '@/components/ui/stardust-button'
import { AlertCircle, User, Mail, Phone } from 'lucide-react'

interface FormData {
  nome: string
  email: string
  whatsapp: string
}

export function LeadForm() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    navigate('/obrigado', { state: { nome: data.nome } })
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '')
    if (value.length > 11) value = value.slice(0, 11)

    // Mask: (XX) XXXXX-XXXX
    if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`
    }
    if (value.length > 9) {
      value = `${value.slice(0, 9)}-${value.slice(9)}`
    }

    setValue('whatsapp', value)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-2.5">
      <div className="relative group">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 z-20 pointer-events-none">
          <User size={18} />
        </div>
        <Input
          placeholder="Nome completo"
          {...register('nome', { required: true })}
          className={`pl-10 ${errors.nome ? 'border-red-500/50 focus-visible:ring-1 focus-visible:ring-red-500' : ''}`}
        />
        {errors.nome && (
          <div className="absolute z-50 right-0 -top-7 md:top-1/2 md:-translate-y-1/2 md:right-3 bg-red-500/10 border border-red-500/20 backdrop-blur-md px-2 py-1 rounded text-xs text-red-400 flex items-center gap-1 animate-in fade-in slide-in-from-bottom-1">
            <AlertCircle className="w-3 h-3" />
            <span>Preencha seu nome</span>
          </div>
        )}
      </div>

      <div className="relative group">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 z-20 pointer-events-none">
          <Mail size={18} />
        </div>
        <Input
          type="email"
          placeholder="E-mail"
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
          })}
          className={`pl-10 ${errors.email ? 'border-red-500/50 focus-visible:ring-1 focus-visible:ring-red-500' : ''}`}
        />
        {errors.email && (
          <div className="absolute z-50 right-0 -top-7 md:top-1/2 md:-translate-y-1/2 md:right-3 bg-red-500/10 border border-red-500/20 backdrop-blur-md px-2 py-1 rounded text-xs text-red-400 flex items-center gap-1 animate-in fade-in slide-in-from-bottom-1">
            <AlertCircle className="w-3 h-3" />
            <span>Email inválido</span>
          </div>
        )}
      </div>

      <div className="relative group">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 z-20 pointer-events-none">
          <Phone size={18} />
        </div>
        <Input
          type="tel"
          placeholder="WhatsApp (com DDD)"
          {...register('whatsapp', {
            required: true,
            minLength: 14 // (XX) XXXXX-XXXX
          })}
          onChange={handlePhoneChange}
          className={`pl-10 ${errors.whatsapp ? 'border-red-500/50 focus-visible:ring-1 focus-visible:ring-red-500' : ''}`}
        />
        {errors.whatsapp && (
          <div className="absolute z-50 right-0 -top-7 md:top-1/2 md:-translate-y-1/2 md:right-3 bg-red-500/10 border border-red-500/20 backdrop-blur-md px-2 py-1 rounded text-xs text-red-400 flex items-center gap-1 animate-in fade-in slide-in-from-bottom-1">
            <AlertCircle className="w-3 h-3" />
            <span>WhatsApp inválido</span>
          </div>
        )}
      </div>

      <StardustButton type="submit" className="w-full mt-4">
        GARANTIR MEU ACESSO
      </StardustButton>
    </form>
  )
}
