// import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { GrConfigure } from 'react-icons/gr'
import { AiOutlineLogout } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'
import { getOptions } from '@/utils/ConfigOptions'
import { useConfig } from '@/hooks/useConfig'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useAuth } from '@/hooks/useAuth'

export function Navbar() {
  const { user } = useAuth()
  const { options, toggleSidebar } = useConfig()
  return (
    <nav className={`${options.topNav} ${options.text} shadow-lg fixed w-full top-0 z-50 select-none`}>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <button
              onClick={toggleSidebar}
              className='p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden'
            >
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
            <div className='flex-shrink-0 flex items-center'>
              <img src='logo/ArmstrongBlanco.png' alt='Company Logo' className='h-9 ml-20 lg:ml-7' />
            </div>
          </div>

          <div className='flex items-center space-x-2'>
            <span className='text-sm font-bold hidden md:flex'>{user?.Nombre}</span>
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className='cursor-pointer'>
                  <AvatarImage src={options.avatar} alt='User' />
                  <AvatarFallback>'GA'</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className='w-56 p-1' align='end'>
                <div className='flex flex-col'>
                  <div className='px-2 py-1.5 text-sm font-medium'>{user?.Nombre}</div>
                  <Separator className='my-2' />
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button
                        variant='ghost'
                        className='flex gap-5 justify-start font-normal items-center text-sm text-left hover:bg-gray-100'
                      >
                        <GrConfigure />
                        Configuracion
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Configuracion</SheetTitle>
                        <SheetDescription>Configuracion del sistema para experiencia del usuario.</SheetDescription>
                      </SheetHeader>
                      <Separator />
                      <ConfigurationContainer />
                      <SheetFooter>
                        <div className='flex justify-center gap-4 text-grayday hover:opacity-85'>
                          <FaGithub className='cursor-pointer' />
                          <Separator orientation='vertical' />
                          <FaLinkedinIn className='cursor-pointer' />
                        </div>
                        <SheetDescription>© 2025 Grupo Armstrong - Eduardo Martinez Cardenas.</SheetDescription>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                  <Button
                    variant='ghost'
                    className='flex gap-5 justify-start font-normal items-center text-sm text-left hover:bg-gray-100'
                  >
                    <AiOutlineLogout />
                    Cerrar sesión
                  </Button>
                  <Separator className='my-2' />
                  <span className='flex justify-center text-sm text-muted-foreground font-bold'>Version 1.0.0</span>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  )
}

const ConfigurationContainer = () => {
  const { setOptions, options, resetOptions } = useConfig()

  const handleOptionChange = (area, optionClass) => {
    setOptions({ [area]: optionClass })
  }

  return (
    <div className='flex flex-col h-5'>
      <h1 className='ml-4 text-slate-500'>Navegación superior:</h1>
      <div className='flex px-5 py-1 gap-5'>
        {getOptions('mainColors').map(option => (
          <div
            key={`top-${option.class}`}
            onClick={() => handleOptionChange('topNav', option.class)}
            className='h-10 w-10 shadow-sm shadow-slate-500 cursor-pointer rounded-xs'
          >
            <div
              className={`h-3/12 w-full ${option.class} shadow-sm rounded-xs cursor-pointer ${option.hover}`}
              title={option.name}
            />
          </div>
        ))}
      </div>
      <h1 className='ml-4 text-slate-500'>Navegación lateral:</h1>
      <div className='flex px-5 py-1 gap-5'>
        {getOptions('mainColors').map(option => (
          <div
            key={`top-${option.class}`}
            onClick={() => handleOptionChange('sideNav', option.class)}
            className='h-10 w-10 shadow-sm shadow-slate-500 cursor-pointer rounded-xs'
          >
            <div
              className={`h-full w-4/12 ${option.class} shadow-sm rounded-xs cursor-pointer ${option.hover}`}
              title={option.name}
            />
          </div>
        ))}
      </div>
      <Separator className='my-4' />
      <h1 className='ml-4 text-slate-500'>Encabezados:</h1>
      <div className='flex px-5 py-1 gap-2'>
        {getOptions('fullColors').map(option => (
          <div
            key={`top-${option.class}`}
            onClick={() => handleOptionChange('headTable', option.class)}
            className='h-5 w-5 shadow-sm shadow-slate-500 cursor-pointer rounded-xs'
          >
            <div
              className={`h-full w-full ${option.class} rounded-xs cursor-pointer ${option.hover}`}
              title={option.name}
            />
          </div>
        ))}
      </div>
      <h1 className='ml-4 text-slate-500'>Botones:</h1>
      <div className='flex px-5 py-1 gap-2'>
        {getOptions('fullColors').map(option => (
          <div
            key={`top-${option.class}`}
            onClick={() => handleOptionChange('button', option.class)}
            className='h-5 w-5 shadow-sm shadow-slate-500 cursor-pointer rounded-xs'
          >
            <div
              className={`h-full w-full ${option.class} rounded-xs cursor-pointer ${option.hover}`}
              title={option.name}
            />
          </div>
        ))}
      </div>
      <Separator className='my-4' />
      <h1 className='ml-4 text-slate-500'>Imagen Perfil:</h1>
      <div className='flex px-5 py-1 gap-2 flex-wrap'>
        {getOptions('avatarImage').map(option => (
          <Avatar key={option.name}>
            <AvatarImage
              src={option.class}
              alt={option.hover}
              className='cursor-pointer'
              onClick={() => handleOptionChange('avatar', option.class)}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <Separator className='my-4' />
      <div className='flex justify-center'>
        <Button size='sm' className={`${options.button} ${options.hover} cursor-pointer w-10/12`} onClick={resetOptions}>
          Resetear Estilos
        </Button>
      </div>
    </div>
  )
}
