import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ChampionsContextProvider from './ContextAPI/ChampionsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <ChampionsContextProvider>
          <App />
        </ChampionsContextProvider>
  </StrictMode>,
)
