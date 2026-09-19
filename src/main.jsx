import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Destbutton } from './assets/components/destbutton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Destbutton text="Click Me" color="Blue" fontSize={21} />
    <Destbutton text="Don't Dare to Touch Me" color="Red" fontSize={15} />
    <Destbutton text="Vastugena Huiyaaa" color="Pink" fontSize={11} />


  </StrictMode>,
)
