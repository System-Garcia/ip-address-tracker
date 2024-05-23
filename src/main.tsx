import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { IpProvider } from './context/IpProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IpProvider>
      <App />
    </IpProvider>
  </React.StrictMode>
)
