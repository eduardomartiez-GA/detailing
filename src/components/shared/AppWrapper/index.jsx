import { Outlet } from 'react-router-dom'
import { AuthProvider } from '@/Context/Auth'
import { ConfigProvider } from '@/Context/Configuration'

export const AppWrapper = () => (
  <ConfigProvider>
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  </ConfigProvider>
)
