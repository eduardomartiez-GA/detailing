import { createHashRouter, redirect } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { AppWrapper } from '@/components/shared/AppWrapper'
import { ProtectedRoute } from '@/components/shared/ProtectedRoute'
import { Layout } from '@/components/shared/Layout'

// Lazy load pages for code splitting
const HomePage = lazy(() => import('@/pages/Home').then(module => ({ default: module.HomePage })))
const LoginPage = lazy(() => import('@/pages/Login').then(module => ({ default: module.LoginPage })))
const NotFound = lazy(() => import('@/pages/NotFound').then(module => ({ default: module.NotFound })))

// Lazy load Catalogos pages
// Loading component for Suspense fallback
// eslint-disable-next-line react-refresh/only-export-components
const PageLoader = () => (
  <div className='flex items-center justify-center min-h-screen'>
    <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary'></div>
  </div>
)

// Wrapper component for lazy loaded routes
// eslint-disable-next-line react-refresh/only-export-components
const LazyWrapper = ({ children }) => <Suspense fallback={<PageLoader />}>{children}</Suspense>

export const router = createHashRouter([
  {
    element: <AppWrapper />,
    children: [
      {
        path: '/login',
        element: (
          <LazyWrapper>
            <LoginPage />
          </LazyWrapper>
        ),
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <Layout />,
            children: [
              {
                path: '/',
                element: (
                  <LazyWrapper>
                    <HomePage />
                  </LazyWrapper>
                ),
              },
              {
                path: '/not-found',
                element: (
                  <LazyWrapper>
                    <NotFound />
                  </LazyWrapper>
                ),
              },
              // Si no existe la ruta - envia directamente a pagina no encontrada
              { path: '*', loader: () => redirect('/not-found') },
            ],
          },
        ],
      },
    ],
  },
])
