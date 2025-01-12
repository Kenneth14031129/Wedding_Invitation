import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WeddingInvitation from './WeddingInvitation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeddingInvitation />
  </StrictMode>,
)
