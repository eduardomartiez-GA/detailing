import { Outlet } from 'react-router-dom'
import { AuthProvider } from '@/context/Auth'
import { ConfigProvider } from '@/context/Configuration'

export const AppWrapper = () => (
  <ConfigProvider>
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  </ConfigProvider>
)
