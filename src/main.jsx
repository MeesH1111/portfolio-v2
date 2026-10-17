import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from './homepage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './about.jsx'
import Projects from './projects.jsx'
import Testpage from './test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/test' element={<Testpage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
