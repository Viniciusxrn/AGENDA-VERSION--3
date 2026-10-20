import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Empresa from './components/Empresa.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App /> } />
        <Route path='/Empresa' element={<Empresa />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
