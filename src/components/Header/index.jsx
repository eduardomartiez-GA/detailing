export default function Header() {
  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg border-b border-primary">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <svg className="w-9 h-9 text-primary" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,2.5c-3.9,0-7,3.1-7,7c0,2.4,1.2,4.6,3.1,5.8c-0.3,1.3-0.8,2.6-1.5,3.7c-0.7,1.1-1.5,2-2.5,2.7c-0.2,0.1-0.3,0.3-0.3,0.5v0.3h15.4v-0.3c0-0.2-0.1-0.4-0.3-0.5c-1-0.7-1.8-1.6-2.5-2.7c-0.7-1.1-1.2-2.4-1.5-3.7c1.9-1.3,3.1-3.4,3.1-5.8C19,5.6,15.9,2.5,12,2.5z M12,12.5c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S13.7,12.5,12,12.5z"/>
            </svg>
            <h1 className="text-2xl font-bold">
              <span className="text-accent">Moto</span>
              <span className="text-white">Spa</span>
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#servicios" className="hover:text-primary transition-colors duration-300 font-medium">Servicios</a>
            <a href="#galeria" className="hover:text-primary transition-colors duration-300 font-medium">Galería</a>
            <a href="#testimonios" className="hover:text-primary transition-colors duration-300 font-medium">Testimonios</a>
            <a href="#contacto" className="bg-primary hover:bg-opacity-90 px-4 py-2 rounded-md text-white font-bold transition-colors duration-300">Contacto</a>
          </nav>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}