import { useState } from 'react'
import { ConfigContext } from '@/hooks/useConfig'
import { useIsMobile } from '@/hooks/isMobile'

const defaultOptions = {
  topNav: 'bg-principal',
  sideNav: 'bg-principal',
  headTable: 'bg-gray-500',
  button: 'bg-principal',
  avatar: 'https://www.svgrepo.com/show/477001/beach.svg',
  text: 'text-secundario',
  hover: 'hover:opacity-80',
}

export const ConfigProvider = ({ children }) => {
  const isMobile = useIsMobile()
  const [options, setOptionsState] = useState(() => {
    const saved = localStorage.getItem('configOptions')
    return saved ? JSON.parse(saved) : defaultOptions
  })

  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const saved = localStorage.getItem('isSidebarOpen')
    return saved ? JSON.parse(saved) : false
  })
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem('isSidebarCollapsed')
    if (isMobile) return false
    return saved ? JSON.parse(saved) : false
  })

  const setOptions = newOptions => {
    console.log(newOptions)
    setOptionsState(prev => {
      const updated = { ...prev, ...newOptions }
      localStorage.setItem('configOptions', JSON.stringify(updated))
      return updated
    })
  }

  const resetOptions = () => {
    setOptionsState(defaultOptions)
    localStorage.setItem('configOptions', JSON.stringify(defaultOptions))
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => {
      localStorage.setItem('isSidebarOpen', JSON.stringify(!prev))
      return !prev
    })
  }
  const onToggleCollapse = () => {
    setIsCollapsed(prev => {
      localStorage.setItem('isSidebarCollapsed', JSON.stringify(!prev))
      return !prev
    })
  }

  return (
    <ConfigContext.Provider
      value={{ options, setOptions, resetOptions, isSidebarOpen, toggleSidebar, onToggleCollapse, isCollapsed }}
    >
      {children}
    </ConfigContext.Provider>
  )
}
