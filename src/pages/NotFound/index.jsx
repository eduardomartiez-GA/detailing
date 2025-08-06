import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[calc(100dvh-7rem)] px-4 py-12 bg-gradient-to-br from-secundario via-white to-secundario text-slate-500'>
      <h1 className='text-8xl font-extrabold tracking-tight mb-4'>404</h1>
      <p className='text-2xl md:text-3xl font-semibold mb-2'>Página no encontrada</p>
      <p className='text-gray-400 mb-6 text-center max-w-md'>
        Lo sentimos, la página que buscas no existe o ha sido movida. Verifica la URL o vuelve al inicio.
      </p>
      <Link
        to='/'
        className='inline-flex items-center px-5 py-3 bg-white text-gray-900 rounded-full shadow-md hover:bg-gray-200 transition duration-300'
      >
        <FaArrowLeft className='mr-2' />
        Volver al inicio
      </Link>
    </div>
  )
}
