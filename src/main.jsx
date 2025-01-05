import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Router/routes.jsx'
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >

    <div className='w-11/12 mx-auto'>
      <RouterProvider router={routes}></RouterProvider>
   </div>
    </QueryClientProvider>
  </StrictMode>,
)
