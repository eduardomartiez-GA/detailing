export default function Hero() {
  return (
    <section className='relative bg-gradient-to-r from-black to-primary h-screen flex items-center'>
      <div className="absolute inset-0 opacity-90 bg-[url('/images/hero.jpg')] bg-cover bg-center scale-x-[-1]"></div>
      <div className='container mx-auto px-6 z-10'>
        <div className='max-w-2xl bg-black bg-opacity-70 p-10 rounded-lg border-l-4 border-accent'>
          <h1 className='text-5xl md:text-6xl font-bold mb-4'>
            <span className='text-white'>Premium </span>
            <span className='text-primary'>Moto</span>
            <span className='text-accent'> Spa</span>
          </h1>
          <p className='text-xl text-white mb-8'>
            Servicios especializados para motocicletas. Producto de la mejor calidad aplicada al cuidado de tu moto.
          </p>
          <div className='flex space-x-4'>
            <a
              href='#servicios'
              className='bg-accent hover:bg-opacity-90 text-white px-6 py-3 rounded font-bold transition flex items-center'
            >
              <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
              </svg>
              Nuestros Servicios
            </a>
            <a
              href='#contacto'
              className='bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded font-bold transition'
            >
              Reservar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
