export default function Gallery() {
  const galleryImages = [
    { id: 1, alt: "Moto antes y después del detallado" },
    { id: 2, alt: "Proceso de pulido de tanque" },
    { id: 3, alt: "Motor detallado" },
    { id: 4, alt: "Aplicación de cerámica" },
    { id: 5, alt: "Moto deportiva terminada" },
    { id: 6, alt: "Detalle de llantas" }
  ]

  return (
    <section id="galeria" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-light mb-4">Galería de <span className="text-primary">Trabajos</span></h2>
          <p className="max-w-2xl mx-auto text-light opacity-80">Transformaciones que hablan por sí solas.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map(image => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={`images/g-${image.id}.jpg`} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <svg className="w-12 h-12 text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}