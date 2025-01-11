import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Router from '@/routes/index.jsx'
import './index.css'
import '@/App.css'
import { CookiesProvider } from 'react-cookie'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CookiesProvider>
            <Router />
        </CookiesProvider>
    </StrictMode>,
)
