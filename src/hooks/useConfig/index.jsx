import { useContext, createContext } from 'react'

export const ConfigContext = createContext(undefined)

export const useConfig = () => {
  const context = useContext(ConfigContext)
  if (context === undefined) {
    throw new Error('useConfig debe usarse dentro de un ConfigProvider')
  }
  return context
}
