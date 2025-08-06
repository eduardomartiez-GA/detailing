import { createHashRouter, redirect } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { AppWrapper } from '@/components/Shared/AppWrapper'
import { ProtectedRoute } from '@/components/Shared/ProtectedRoute'
import { Layout } from '@/components/Shared/Layout'

// Lazy load pages for code splitting
const HomePage = lazy(() => import('@/pages/Home').then(module => ({ default: module.HomePage })))
const LoginPage = lazy(() => import('@/pages/Login').then(module => ({ default: module.LoginPage })))
const NotFound = lazy(() => import('@/pages/NotFound').then(module => ({ default: module.NotFound })))

// Lazy load Catalogos pages
const Servicios = lazy(() => import('@/pages/Secciones/Servicios').then(module => ({ default: module.Servicios })))
const Auditorias = lazy(() => import('@/pages/Secciones/Auditorias').then(module => ({ default: module.Auditorias })))
const DataAnalisis = lazy(() => import('@/pages/DataAnalisis').then(module => ({ default: module.DataAnalisis })))

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
              {
                path: '/data-analisis',
                element: (
                  <LazyWrapper>
                    <DataAnalisis />
                  </LazyWrapper>
                ),
              },

              // REPORTES
              {
                path: 'reportes',
                children: [
                  {
                    path: 'evidencias',
                    element: (
                      <LazyWrapper>
                        <Servicios />
                      </LazyWrapper>
                    ),
                  },
                  {
                    path: 'rechazos',
                    element: (
                      <LazyWrapper>
                        <Auditorias />
                      </LazyWrapper>
                    ),
                  },
                ],
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
