export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Lavado Premium',
      description: 'Lavado completo con productos especializados que no dañan la pintura ni componentes.',
      price: '$50',
      features: [
        'Lavado de chasis y motor',
        'Secado con aire comprimido',
        'Aplicación de protectante',
        'Brillo instantáneo',
      ],
    },
    {
      id: 2,
      title: 'Detallado Completo',
      description: 'Servicio integral que incluye limpieza, pulido y protección de todas las superficies.',
      price: '$120',
      features: ['Lavado premium', 'Descontaminación de pintura', 'Pulido de faros y plásticos', 'Cerámica líquida'],
    },
    {
      id: 3,
      title: 'Tratamiento Cerámico',
      description: 'Protección avanzada con recubrimiento cerámico profesional de 9H de duración.',
      price: '$250',
      features: ['Preparación de superficie', 'Aplicación cerámica', 'Protección UV', 'Garantía de 1 año'],
    },
    {
      id: 4,
      title: 'Detallado de Motor',
      description: 'Limpieza profunda del motor y componentes mecánicos para exhibición o venta.',
      price: '$80',
      features: ['Desengrasado seguro', 'Protección de componentes', 'Brillo duradero', 'Sin riesgo eléctrico'],
    },
  ]

  return (
    <section id='servicios' className='py-20 bg-light'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-secondary mb-4'>
            Nuestros <span className='text-primary'>Servicios</span>
          </h2>
          <p className='max-w-2xl mx-auto text-dark'>
            Ofrecemos tratamientos especializados para mantener tu moto impecable y protegida.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map(service => (
            <div key={service.id} className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition'>
              <div className='bg-primary text-light py-4 px-6'>
                <h3 className='text-2xl font-bold'>{service.title}</h3>
                <p className='text-accent font-bold'>{service.price}</p>
              </div>
              <div className='p-6'>
                <p className='text-dark mb-4'>{service.description}</p>
                <ul className='space-y-2'>
                  {service.features.map((feature, index) => (
                    <li key={index} className='flex items-start'>
                      <svg
                        className='w-5 h-5 text-primary mr-2 mt-0.5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className='mt-6 w-full bg-secondary hover:bg-opacity-90 text-light py-2 rounded font-bold transition'>
                  Reservar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
