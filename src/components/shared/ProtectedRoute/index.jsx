import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth()

  if (loading) return <div>Cargando...</div>
  return <Outlet />
  // return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />
}
