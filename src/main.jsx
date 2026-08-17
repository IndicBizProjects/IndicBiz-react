import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
import './styles/tokens.css'
import './styles/reset.css'
import './styles/base.css'
import './styles/glass.css'
import './styles/neo.css'
import './styles/buttons-3d.css'
import './styles/main.css'
import App from './app/App.jsx'
import { RouterProvider } from './app/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </StrictMode>,
)
