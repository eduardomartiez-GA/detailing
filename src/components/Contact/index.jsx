export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-light mb-4">Contáctanos</h2>
            <p className="max-w-2xl mx-auto text-light opacity-80">Agenda una cita o consulta por nuestros servicios.</p>
          </div>
          
          <form className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-light mb-2">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded bg-dark border border-gray-700 text-light focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-light mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded bg-dark border border-gray-700 text-light focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-light mb-2">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded bg-dark border border-gray-700 text-light focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="+52 123 456 7890"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="bike" className="block text-light mb-2">Moto (Marca/Modelo)</label>
                <input 
                  type="text" 
                  id="bike" 
                  className="w-full px-4 py-3 rounded bg-dark border border-gray-700 text-light focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="Ej. Yamaha MT-07"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-light mb-2">Servicio de interés</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded bg-dark border border-gray-700 text-light focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="lavado">Lavado Premium</option>
                  <option value="detallado">Detallado Completo</option>
                  <option value="ceramico">Tratamiento Cerámico</option>
                  <option value="motor">Detallado de Motor</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-light mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  rows="3" 
                  className="w-full px-4 py-3 rounded bg-dark border border-gray-700 text-light focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="Detalles adicionales..."
                ></textarea>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-opacity-90 text-light py-4 rounded font-bold text-lg transition"
              >
                Enviar Consulta
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}