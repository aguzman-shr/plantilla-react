import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './infrastructure/i18n/index.ts';
import { CookiesProvider } from 'react-cookie';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './infrastructure/query/reactQueryClient.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </QueryClientProvider>
  </StrictMode>,
)
