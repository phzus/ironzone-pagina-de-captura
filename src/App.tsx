import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Captura } from '@/pages/captura'
import { Obrigado } from '@/pages/obrigado'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Captura />} />
        <Route path="/captura" element={<Captura />} />
        <Route path="/obrigado" element={<Obrigado />} />
        <Route path="/thank-you" element={<Navigate to="/obrigado" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
