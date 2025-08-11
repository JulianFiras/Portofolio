import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// restore theme from localStorage on load
const theme = localStorage.getItem('theme')
if (theme === 'dark') document.documentElement.classList.add('dark')

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

