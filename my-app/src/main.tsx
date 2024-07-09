import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import SocketProvider from './context/SocketProvider.tsx'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <SocketProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </QueryClientProvider>
    </SocketProvider>
  </Provider>
)
