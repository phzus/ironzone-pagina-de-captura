import { Hero } from '@/components/Hero'
import { Location } from '@/components/Location'
import { Footer } from '@/components/Footer'

export function Captura() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Hero />
      <Location />
      <Footer />
    </main>
  )
}
