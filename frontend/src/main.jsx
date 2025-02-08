import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/Menu.css'
import './CSS/Root.css'
import './CSS/HomePage.css'
import './CSS/AboutUs.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
