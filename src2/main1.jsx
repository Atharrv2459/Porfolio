import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App1.jsx'
import App from './App1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
