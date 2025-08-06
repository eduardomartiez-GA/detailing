export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Carlos M.',
      bike: 'Harley Davidson Softail',
      comment:
        'Mi Softail nunca había lucido tan bien. El tratamiento cerámico hizo que la pintura se vea como nueva y el agua ya no se adhiere. ¡Increíble!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Ana R.',
      bike: 'Ducati Monster',
      comment:
        'Excelente servicio. Cuidan cada detalle de la moto como si fuera propia. Ahora llevo todas mis motos aquí.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Javier L.',
      bike: 'BMW R1250GS',
      comment:
        'Después de un viaje largo por tierra, mi GS estaba irreconocible. El detallado de motor fue espectacular. Parece 0km.',
      rating: 4,
    },
  ]

  return (
    <section id='testimonios' className='py-20 bg-light'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-secondary mb-4'>
            Lo que dicen <span className='text-primary'>nuestros clientes</span>
          </h2>
          <p className='max-w-2xl mx-auto text-dark'>
            La satisfacción de los motociclistas es nuestra mejor publicidad.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className='bg-white p-8 rounded-lg shadow-md'>
              <div className='flex mb-4'>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent' : 'text-gray-300'}`}
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>
              <p className='text-dark mb-6 italic'>"{testimonial.comment}"</p>
              <div className='flex items-center'>
                <div className='bg-primary rounded-full w-12 h-12 flex items-center justify-center text-light font-bold mr-4'>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className='font-bold text-secondary'>{testimonial.name}</h4>
                  <p className='text-sm text-dark opacity-70'>{testimonial.bike}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
