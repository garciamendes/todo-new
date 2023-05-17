import React from 'react'
import ReactDOM from 'react-dom/client'

// Local
import './static/styles/global.css'
import { App } from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
