import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './paginas/inicio'
import Contacto from './paginas/contacto'
import Registro from './paginas/registro'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Registro" element={<Registro />} /> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
