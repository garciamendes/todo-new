import React from 'react'
import ReactDOM from 'react-dom/client'

// Local
import './assets/styles/global.css'
import { TodoApp } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
)
