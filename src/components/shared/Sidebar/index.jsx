// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { MenuOptions } from '@/utils/MenuOptions'
import { useConfig } from '@/hooks/useConfig'
import { ConfigContext } from '@/hooks/useConfig'

export function Sidebar() {
  const { options, toggleSidebar, isSidebarOpen, onToggleCollapse, isCollapsed } = useConfig()
  return (
    <>
      {/* Overlay para móvil */}
      {isSidebarOpen && (
        <div className='fixed inset-0 bg-black opacity-60 transition-opacity lg:hidden z-20' onClick={toggleSidebar} />
      )}

      <div
        className={`
          fixed h-[calc(100dvh-4rem)] top-16 bottom-0 left-0 z-30 select-none transform transition-all duration-300 ease-in-out
          ${options.sideNav} text-white
          lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          ${isCollapsed ? 'w-16' : 'w-64'}
        `}
      >
        {/* Header */}
        <div
          className={`flex items-center h-1/12 px-4 ${options.headTable} ${
            isCollapsed ? 'justify-center' : 'justify-between'
          }`}
        >
          {!isCollapsed && <span className='font-semibold text-md'>Menú</span>}

          {/* Botón colapsar (desktop) */}
          <button
            onClick={onToggleCollapse}
            className='text-gray-300 hover:text-white hidden lg:block p-1 rounded'
            title={isCollapsed ? 'Expandir menú' : 'Colapsar menú'}
          >
            <svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              {isCollapsed ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
              )}
            </svg>
          </button>

          {/* Botón cerrar (mobile) */}
          <button onClick={toggleSidebar} className='text-gray-300 hover:text-white lg:hidden'>
            <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>

        {/* Menú */}
         <nav className='mt-5 h-10/12 overflow-y-auto overflow-x-hidden scrollbar-hide'>
          <div className={`space-y-2 ${isCollapsed ? 'px-2' : 'px-4'}`}>
            <Accordion type='single' collapsible className='w-full'>
              {MenuOptions.map(item => {
                if (item.type === 'normal') {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.id}
                      to={item.url}
                      className={`group flex items-center py-2 text-base font-medium rounded-md text-secundario hover:bg-gray-400 transition-colors duration-200 ${
                        isCollapsed ? 'px-2 justify-center' : 'px-2'
                      }`}
                      title={isCollapsed ? item.tag : ''}
                    >
                      <Icon className={`text-xl ${isCollapsed ? '' : 'mr-3'}`} />
                      {!isCollapsed && <span className='truncate'>{item.tag}</span>}
                    </Link>
                  )
                }
                if (item.type === 'accordion' && item.subItems) {
                  const Icon = item.icon
                  return (
                    <AccordionItem value={item.id} className='border-none' key={item.id}>
                      <AccordionTrigger
                        className={`text-secundario px-2 py-2 text-base font-medium rounded-md hover:bg-gray-400 transition-all duration-200 ${
                          isCollapsed ? 'justify-center [&>svg]:hidden' : ''
                        }`}
                      >
                        <div className='flex items-center w-full'>
                          <Icon className={`text-xl ${isCollapsed ? 'mx-auto' : 'mr-3'}`} />
                          {!isCollapsed && <span>{item.tag}</span>}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className={`${isCollapsed ? 'pl-3 space-y-0.5' : 'pl-9 space-y-1'}`}>
                        {item.subItems.map(sub => (
                          <Link
                            key={sub.id}
                            to={sub.url}
                            className='flex text-secundario text-sm hover:bg-gray-400 rounded-md px-2 py-1 gap-2 items-center'
                          >
                            {sub.icon && <sub.icon className='' />}
                            {isCollapsed ? '' : sub.tag}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  )
                }
                return null
              })}
            </Accordion>
          </div>
        </nav>

        {/* Usuario (footer) */}
        <div className='absolute bottom-0 w-full p-2'>
          <div className={`flex justify-center items-center text-xs text-gray-500`}>
            {!isCollapsed && <span className='truncate'>Eduardo Martinez Cardenas</span>}
          </div>
        </div>
      </div>
    </>
  )
}
